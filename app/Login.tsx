import { Link, useRouter } from "expo-router"; // Import useRouter hook for navigation
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

// FloatingLabelInput Component with properties for Login
const FloatingLabelInput = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  onEyePress, // Function for toggling password visibility
  isPassword, // Flag to check if it's a password field
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedLabelPosition = useState(new Animated.Value(value ? 1 : 0))[0];
  const animatedLabelScale = useState(new Animated.Value(1))[0]; // Adding label scale animation

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedLabelPosition, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedLabelScale, {
      toValue: 0.8,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      Animated.timing(animatedLabelPosition, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
      Animated.timing(animatedLabelScale, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }
  };

  const labelStyle = {
    position: "absolute",
    left: 19,
    top: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [25, 15], // Moves label up and down
    }),
    fontSize: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], // Adjusts label font size
    }),
    transform: [
      {
        scale: animatedLabelScale,
      },
    ],
    color: isFocused ? "red" : "#aaa", // Color changes when focused
  };

  return (
    <View style={styles.inputContainer}>
      <Animated.Text style={labelStyle}>{label}</Animated.Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={secureTextEntry}
        style={[styles.input, isFocused && styles.inputFocused]}
      />
      {isPassword && (
        <TouchableOpacity style={styles.eyeIcon} onPress={onEyePress}>
          <Icon
            name={secureTextEntry ? "visibility" : "visibility-off"}
            size={24}
            color="#aaa"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

// Login Component
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter(); // Hook to handle navigation

  // Handle back button press
  const handleBackPress = () => {
    router.push("/Signup"); // Navigate to the signup page
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={handleBackPress}
        style={styles.backButtonSignup}
      >
        <Icon name="arrow-back" size={30} color="red" />
      </TouchableOpacity>

      <Text style={styles.title}>Login</Text>

      {/* Input Fields with Floating Labels */}
      <FloatingLabelInput label="Email" value={email} onChangeText={setEmail} />
      <FloatingLabelInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!isPasswordVisible} // Toggle password visibility
        onEyePress={togglePasswordVisibility} // Pass the toggle function
        isPassword={true} // Indicate it's a password field
      />

      {/* Already Have Account */}
      <View style={styles.loginRowLogin}>
        <Text style={styles.loginTextLogin}>Forgot your password? </Text>

        <Link href="/ForgotPassword" style={styles.linkLogin}>
          <Icon
            name="arrow-right-alt"
            size={20}
            color="red"
            style={styles.arrowIconLogin}
          />
        </Link>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Link href="/about">
          <Text style={styles.signUpButtonText}>LOGIN </Text>
        </Link>
      </TouchableOpacity>

      {/* Social Login */}
      <Text style={styles.socialText}>Or sign up with a social account </Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency/48/null/google-logo.png",
            }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{
              uri: "https://img.icons8.com/color/48/null/facebook-new.png",
            }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#000",
  },
  inputContainer: {
    backgroundColor: "#fff",
    position: "relative",
    padding: 25,
    paddingBottom: 20,
    paddingTop: 20,
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    color: "#000",
    paddingVertical: 5,
  },
  inputFocused: {
    borderColor: "red", // Add border color when focused
  },
  eyeIcon: {
    position: "absolute",
    right: 0,
    top: 6,
    padding: 10,
  },
  loginRowLogin: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  loginTextLogin: {
    color: "#888",
    fontSize: 14,
  },
  signUpButton: {
    backgroundColor: "red",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  signUpButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  socialText: {
    textAlign: "center",
    color: "#888",
    marginBottom: 20,
    fontSize: 14,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  backButtonSignup: {
    position: "absolute",
    top: 80,
    left: 10,
    padding: 10,
    zIndex: 1, // Ensure the back button is above other elements
  },
});

export default Login;
