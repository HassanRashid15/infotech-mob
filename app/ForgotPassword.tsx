import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

// FloatingLabelInput Component for Signup
const FloatingLabelInputSignup = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedLabelPosition = useState(new Animated.Value(value ? 1 : 0))[0];
  const animatedLabelScale = useState(new Animated.Value(1))[0];

  const handleFocus = () => {
    setIsFocused(true);

    // Animate label position (translateY) with native driver
    Animated.timing(animatedLabelPosition, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true, // Native driver for position
    }).start();

    // Animate label scale (shrink effect) on JS thread
    Animated.timing(animatedLabelScale, {
      toValue: 0.8, // Shrink the label when focused
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true, // Use native driver for scaling
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      // Animate label position (translateY) back to original position
      Animated.timing(animatedLabelPosition, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true, // Native driver for position
      }).start();

      // Reset label scale (restore original size)
      Animated.timing(animatedLabelScale, {
        toValue: 1, // Restore the label font size
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true, // Use native driver for scaling
      }).start();
    }
  };

  const labelStyle = {
    position: "absolute",
    left: 0,
    top: 0,
    transform: [
      {
        translateY: animatedLabelPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [10, 0], // Moves the label from 20px down to -10px up when focused
        }),
      },
      {
        scale: animatedLabelScale, // Shrink the label when focused
      },
    ],
    fontSize: 16, // Maintain a consistent font size, no need to animate it
    color: isFocused || value ? "red" : "#aaa", // Red when focused or has value
  };

  return (
    <View style={styles.inputContainerSignup}>
      <Animated.Text style={[styles.labelSignup, labelStyle]}>
        {label}
      </Animated.Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={secureTextEntry}
        style={[styles.inputSignup, isFocused && styles.inputSignupFocused]}
      />
    </View>
  );
};

// Signup Component
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // hook to manage navigation

  const handleBackPress = () => {
    router.back(); // go back to the previous screen
  };

  return (
    <View style={styles.containerSignup}>
      {/* Back Arrow */}
      <TouchableOpacity
        onPress={handleBackPress}
        style={styles.backButtonSignup}
      >
        <Icon name="arrow-back" size={30} color="red" />
      </TouchableOpacity>

      <Text style={styles.titleSignup}>Forgot Password</Text>

      {/* Input Fields with Floating Labels */}
      <Text style={styles.forgotdescription}>
        Please, enter your email address. You will receive a link to create a
        new password via email.
      </Text>
      <FloatingLabelInputSignup
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.loginRowSignup}>
        <Link href="/Login" style={styles.linkSignup}>
          <Text style={styles.loginTextSignup}>Already have an account?</Text>
        </Link>
        <Icon
          name="arrow-right-alt"
          size={20}
          color="red"
          style={styles.arrowIconSignup}
        />
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButtonSignup}>
        <Text style={styles.signUpButtonTextSignup}>SIGN UP</Text>
      </TouchableOpacity>

  
 
    </View>
  );
};

const styles = StyleSheet.create({

  containerSignup: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  titleSignup: {
    fontSize: 34, // Sets the font size to 34 units
    fontWeight: "bold", // Makes the title bold
    color: "#000", // Sets the text color to black
    textAlign: "left", // Aligns the text to the left
    marginBottom: 40, // Adds 40 units of space below the title (between title and next component)
    marginTop: 60, // Adds 60 units of space above the title (for better spacing from top)
  },

  backButtonSignup: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
  },
  inputContainerSignup: {
    width: "100%", // Make inputs take full width
    marginBottom: 20,
    backgroundColor: "#fff",
    position: "relative",
    height: 75, // Fixed height to prevent layout shift
    justifyContent: "center", // Center the label vertically
  },
  inputSignup: {
    fontSize: 16,
    color: "#000",
    paddingVertical: 10,
    paddingTop: 40,
    paddingRight: 25,
    paddingBottom: 10,
    paddingLeft: 18, // Prevent overlap with label    width: "100%", // Ensure input takes full width
  },
  inputSignupFocused: {
    borderColor: "red", // Add border color when focused
  },
  labelSignup: {
    position: "absolute",
    left: 0,
    top: 0,
    fontSize: 16,
    color: "#aaa",
    fontWeight: "bold",
    paddingLeft: 10, // Adjust left padding for the label
    paddingTop: 18, // Adjust top padding for the label
  },
  loginRowSignup: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  loginTextSignup: {
    color: "#888",
    fontSize: 14,
  },
  signUpButtonSignup: {
    backgroundColor: "red",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    width: "100%", // Full width for button
  },
  signUpButtonTextSignup: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  socialTextSignup: {
    textAlign: "center",
    color: "#888",
    marginBottom: 20,
    fontSize: 14,
  },
  socialButtonsSignup: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30, // Added margin at the bottom
  },
  socialButtonSignup: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  socialIconSignup: {
    width: 30,
    height: 30,
  },
  linkSignup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  arrowIconSignup: {
    marginLeft: 5,
  },
});

export default Signup;
