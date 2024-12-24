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
    Animated.timing(animatedLabelPosition, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    Animated.timing(animatedLabelScale, {
      toValue: 0.8,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      Animated.timing(animatedLabelPosition, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();

      Animated.timing(animatedLabelScale, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
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
          outputRange: [10, 0],
        }),
      },
      {
        scale: animatedLabelScale,
      },
    ],
    fontSize: 16,
    color: isFocused || value ? "red" : "#aaa",
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

// Forgot Password Component
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter(); // hook to manage navigation

  // Navigate back to the login screen
  const handleBackPress = () => {
    router.push("/Login"); // Navigate directly to the login screen
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

      {/* Send Button */}
      <TouchableOpacity style={styles.signUpButtonSignup}>
        <Text style={styles.signUpButtonTextSignup}>SEND</Text>
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
    fontSize: 34,
    fontWeight: "bold",
    color: "#000",
    textAlign: "left",
    marginBottom: 40,
    marginTop: 60,
  },
  backButtonSignup: {
    position: "absolute",
    top: 90,
    left: 6,
    padding: 10,
  },
  inputContainerSignup: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#fff",
    position: "relative",
    height: 75,
    justifyContent: "center",
  },
  inputSignup: {
    fontSize: 16,
    color: "#000",
    paddingVertical: 10,
    paddingTop: 40,
    paddingRight: 25,
    paddingBottom: 10,
    paddingLeft: 18,
  },
  inputSignupFocused: {
    borderColor: "red",
  },
  labelSignup: {
    position: "absolute",
    left: 0,
    top: 0,
    fontSize: 16,
    color: "#aaa",
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 18,
  },
  signUpButtonSignup: {
    backgroundColor: "red",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  signUpButtonTextSignup: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotdescription: {
    color: "#888",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default ForgotPassword;
