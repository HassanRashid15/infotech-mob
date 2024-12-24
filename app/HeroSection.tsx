import React from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

// Replace with the actual Unsplash image URL
const imageUrl =
  "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D";

const HeroSection = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.title}>Fashion sale</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => alert("Button pressed")}
            >
              <Text style={styles.buttonText}>Check</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the parent View takes up the full screen
  },
  imageBackground: {
    height: 500, // Fixed height for the image
    width: "100%", // Ensure the image takes full width
    justifyContent: "flex-end", // Align content towards the bottom of the image
  },
  overlay: {
    position: "absolute", // Overlay should be positioned on top of the image
    top: 0, // Ensure overlay starts at the top of the container
    left: 0, // Ensure overlay starts at the left side of the container
    width: "100%", // Ensure overlay takes up full width of the image
    height: "100%", // Ensure overlay takes full height of the image
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
    justifyContent: "flex-end", // Align content towards the bottom of the overlay
    paddingBottom: 20, // Adds space from the bottom for the button
    paddingHorizontal: 20, // Adds horizontal padding to the overlay
  },
  content: {
    alignItems: "start", // Center content horizontally
    marginBottom: 20, // Adds space at the bottom of the content
    width: 190, // Allow title to adjust on smaller screens
  },
  title: {
    fontSize: 48, // equivalent to font-size: 48px
    lineHeight: 48, // equivalent to line-height: 48px
    textAlign: "left", // equivalent to text-align: left
    fontWeight: "bold", // equivalent to font-weight: bold
    color: "#fff",
    marginBottom: 30, // Adds space at the bottom of the content
    textDecorationLine: "none", // React Native doesn't support text-decoration-skip-ink, 'none' is default
  },
  button: {
    backgroundColor: "#db3022", // Button background color
    paddingVertical: 12, // Vertical padding for the button
    paddingHorizontal: 25, // Horizontal padding for the button
    borderRadius: 5, // Rounded corners
    alignItems: "center", // Center the text inside the button
    width: 160,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  buttonText: {
    fontSize: 18, // Font size for the button text
    color: "#fff", // White text color
    fontWeight: "bold", // Bold text
  },
});

export default HeroSection;
