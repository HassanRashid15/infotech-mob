import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Importing FontAwesome icon library

const data = [
  {
    id: "1",
    image:
      "https://plus.unsplash.com/premium_photo-1677541205130-51e60e937318?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    desc: "Dorothy Perkins",
    title: "Evening Dress",
    price: 125,
    originalPrice: 155,
    discount: "-20%",
    rating: 4.5,
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    desc: "Dorothy Perkinss",
    title: "Sport Dress",
    price: 195,
    originalPrice: 225,
    discount: "-15%",
    rating: 4.8,
  },
  {
    id: "3",
    image:
      "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    desc: "Dorothy Perks",
    title: "Casual Dress",
    price: 85,
    originalPrice: 100,
    discount: "-15%",
    rating: 4.2,
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    desc: "Derkins",
    title: "Formal Dress",
    price: 250,
    originalPrice: 300,
    discount: "-17%",
    rating: 4.9,
  },
];

const { width } = Dimensions.get("window");

const Sales = () => {
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);

  const handleScrollToNextItem = () => {
    if (flatListRef.current) {
      const nextIndex = (index + 1) % data.length;
      flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
      setIndex(nextIndex);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleScrollToNextItem();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const onMomentumScrollEnd = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / (width / 3));
    if (currentIndex === data.length) {
      setIndex(0);
      flatListRef.current.scrollToIndex({ animated: false, index: 0 });
    } else {
      setIndex(currentIndex);
    }
  };

  const renderItem = ({ item }) => {
    // Calculate the number of filled stars based on the rating
    const filledStars = Math.floor(item.rating);
    const halfStar = item.rating % 1 !== 0;

    return (
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.discountTag}>
            <Text style={styles.discountText}>{item.discount}</Text>
          </View>
          <View style={styles.favoriteIcon}>
            <Icon name="heart" size={20} color="red" />
          </View>
        </View>
        <Text style={styles.descr}>{item.desc}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.PriceParent}>
          <Text style={styles.discountedPrice}>${item.price}</Text>
          <Text style={styles.originalPrice}>${item.originalPrice}</Text>
        </View>
        <View style={styles.ratingContainer}>
          {[...Array(5)].map((_, index) => {
            if (index < filledStars) {
              return <Icon key={index} name="star" size={16} color="yellow" />;
            } else if (index === filledStars && halfStar) {
              return (
                <Icon key={index} name="star-half" size={16} color="yellow" />
              );
            } else {
              return (
                <Icon key={index} name="star-o" size={16} color="yellow" />
              );
            }
          })}
          <Text style={styles.ratingText}>({item.rating})</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sale</Text>
      <Animated.FlatList
        ref={flatListRef}
        data={data.concat(data)}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContentContainer}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={onMomentumScrollEnd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    width: width / 3,
    marginHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 150,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  discountTag: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "red",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  discountText: {
    color: "#fff",
    fontWeight: "bold",
  },
  favoriteIcon: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  discountedPrice: {
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
  },
  originalPrice: {
    fontSize: 14,
    color: "gray",
    textDecorationLine: "line-through",
    marginTop: 4,
  },
  flatListContentContainer: {
    paddingHorizontal: 16,
  },
  PriceParent: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 14,
    color: "gray",
  },
  descr: {
    width: "100%",
  },
});

export default Sales;
