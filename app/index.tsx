import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context"; // Added for safe area handling
<<<<<<< HEAD
import Signup from "./Signup";
=======
<<<<<<< HEAD
import Signup from "./Signup";
=======
import { LinearGradient } from "expo-linear-gradient";
>>>>>>> fe7d07dfd3c254763b82a116791d912c52de2b7f
>>>>>>> bfc1b53892246ce9bbdbd784374f448c4a64ffbb

const { height } = Dimensions.get("window");

const Index = () => {
  const [showSecondLayout, setShowSecondLayout] = useState(false);
  const firstLayoutAnim = useRef(new Animated.Value(0)).current;
  const secondLayoutHeight = useRef(new Animated.Value(0)).current;

  const blinkOpacity = useRef(new Animated.Value(1)).current; // Animated value for opacity
  const navigation = useNavigation();

  // Blink effect animation
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkOpacity, {
          toValue: 0, // Fade out
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(blinkOpacity, {
          toValue: 1, // Fade in
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [blinkOpacity]);

  const handlePress = () => {
    // Animate the first layout to swipe up and disappear
    Animated.timing(firstLayoutAnim, {
      toValue: -height, // Moves the first layout off-screen (swipe up)
      duration: 1500,
      useNativeDriver: true,
    }).start();

    // Animate the second layout to expand to full screen height
    Animated.timing(secondLayoutHeight, {
      toValue: height, // Expand the second layout to full screen height
      duration: 1500,
      useNativeDriver: false,
    }).start();

    // Show the second layout and navigate to the home screen after the animation completes
    setTimeout(() => {
      setShowSecondLayout(true);
      // navigation.navigate("index"); // Uncomment if navigation is necessary
    }, 1350);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* First Layout (Animated View) */}
      <Animated.View
        style={[
          styles.layout,
          {
            transform: [{ translateY: firstLayoutAnim }],
            backgroundColor: "#db3022",
            height: "90%",
            position: "absolute",
            top: 0,
            borderBottomLeftRadius: 50, // Adjust the value as needed
            borderBottomRightRadius: 50, // Adjust the value as needed
            // iOS-specific styles
            ...(Platform.OS === "ios"
              ? {
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.5,
                }
              : {}),
            // Android-specific styles
            ...(Platform.OS === "android"
              ? {
                  shadowColor: "#000",
                  height: "85%",
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.5,
                }
              : {}),
          },
        ]}
      >
        <View style={styles.firstlayoutcustom}>
          <Image
            source={require("../assets/images/e-commerce.png")}
            style={styles.webimage}
            resizeMode="contain" // Ensures image scales to fill the screen
          />
          <View style={styles.centeredContent}>
            <Text
              style={{
                fontSize: Platform.OS === "android" ? 32 : 20, // Adjust top for Android and iOS
                color: "white",
                fontWeight: "bold",
                top: Platform.OS === "android" ? 20 : 100, // Adjust top for Android and iOS
              }}
            >
              Green Today, Greener Tomorrow
            </Text>
            <TouchableOpacity
              onPress={handlePress}
              style={styles.button}
              accessible={true}
              accessibilityLabel="Click to swipe up"
            >
              <Animated.Text
                style={[
                  styles.buttonText,
                  {
                    fontSize: Platform.OS === "android" ? 30 : 18, // Adjust top for Android and iOS
                    color: "#db3022",
                    fontWeight: "bold",
                    bottom: Platform.select({
                      ios: -318, // iOS positioning
                      android: -330, // Android positioning (adjust as necessary)
                      default: -325, // Fallback
                    }),
                    opacity: blinkOpacity, // Apply the blinking opacity
                  },
                ]}
              >
                Click to swipe up
              </Animated.Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>

      {/* Second Layout (Animated View) */}
      {showSecondLayout && (
        <Animated.View
          style={[styles.customLayout, { height: secondLayoutHeight }]}
        >
<<<<<<< HEAD
          <Signup/>
=======
<<<<<<< HEAD
          <Signup/>
=======
          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
            }}
            style={styles.imageBackground}
          >
            {/* Gradient Overlay */}
            <LinearGradient
              colors={[
                "rgba(0,0,0,0.8)", // Darker at the bottom
                "rgba(255,255,255,0)", // Fades to transparent
              ]}
              style={styles.overlay}
            />
            {/* Text Content */}
            <View style={styles.textContainer}>
              <Text style={styles.title}>Meet your new mentor</Text>
              <Text style={styles.subtitle}>
                in this adventure of learning a new language
              </Text>
            </View>
            {/* Button/Link */}
            <TouchableOpacity
              style={styles.custombutton}
              onPress={() => console.log("Button Pressed")}
            >
              <Link href="/about">
                <Text style={styles.customLink}>Go to About Page</Text>
              </Link>
              <Text style={styles.custombuttonText}>Explore</Text>
            </TouchableOpacity>
          </ImageBackground>
>>>>>>> fe7d07dfd3c254763b82a116791d912c52de2b7f
>>>>>>> bfc1b53892246ce9bbdbd784374f448c4a64ffbb
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
  },
  layout: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  link: {
    marginTop: 20,
    color: "white",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  firstlayoutcustom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  webimage: {
    position: "absolute",
    top: Platform.OS === "ios" ? "20%" : "25%", // Adjust positioning for iOS and Android
    width: "100%",
    left: Platform.OS === "ios" ? "-45%" : "-50%", // Adjust positioning for iOS and Android
    right: 0,
    bottom: 0,
  },
  centeredContent: {
    position: "absolute",
    zIndex: 1,

    bottom: 235,
    justifyContent: "center",
    alignItems: "center",
  },
  customLayout: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    // Shadow for iOS
    shadowColor: "#000",
    width: "100%",
    height: "100%",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    // Shadow for Android
    elevation: 6,
    overflow: "hidden", // Ensures the shadow and borderRadius are preserved
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    height: "30%", // Overlay covers only 20% of the bottom area
    width: "100%",
    zIndex: 7,
  },
  customText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  customLink: {
    fontSize: 16,
    color: "#fff",
    textDecorationLine: "underline",
  },
  newOverlay: {
    position: "absolute",
    bottom: 0,
    height: "20%", // Adjust height to cover only a small portion from the bottom
    width: "100%",
    zIndex: 7,
  },
  customLayout: {
    flex: 1,
    width: "100%",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end", // Align content at the bottom
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  textContainer: {
    paddingHorizontal: 20,
    marginBottom: 80, // Adjust to position text correctly
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  custombutton: {
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 15,
    borderRadius: 25,
    alignSelf: "center",
    marginBottom: 30,
  },
  custombuttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});

export default Index;
