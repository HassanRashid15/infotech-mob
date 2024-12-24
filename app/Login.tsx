<<<<<<< HEAD
import { Link, useRouter } from "expo-router"; // Import useRouter hook for navigation
=======
import { Link } from "expo-router";
>>>>>>> bfc1b53892246ce9bbdbd784374f448c4a64ffbb
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

<<<<<<< HEAD
// FloatingLabelInput Component with properties for Login
=======
// FloatingLabelInput Component
>>>>>>> bfc1b53892246ce9bbdbd784374f448c4a64ffbb
const FloatingLabelInput = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
<<<<<<< HEAD
  onEyePress, // Function for toggling password visibility
  isPassword, // Flag to check if it's a password field
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedLabelPosition = useState(new Animated.Value(value ? 1 : 0))[0];
  const animatedLabelScale = useState(new Animated.Value(1))[0]; // Adding label scale animation
=======
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedLabelPosition = useState(new Animated.Value(value ? 1 : 0))[0];
>>>>>>> bfc1b53892246ce9bbdbd784374f448c4a64ffbb

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedLabelPosition, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
<<<<<<< HEAD
    Animated.timing(animatedLabelScale, {
      toValue: 0.8,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
=======
>>>>>>> bfc1b53892246ce9bbdbd784374f448c4a64ffbb
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
<<<<<<< HEAD
      Animated.timing(animatedLabelScale, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
=======
>>>>>>> bfc1b53892246ce9bbdbd784374f448c4a64ffbb
    }
  };

  const labelStyle = {
    position: "absolute",
<<<<<<< HEAD
    left: 19,
    top: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [25, 15], // Moves label up and down
=======
    left: 0,
    top: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 0], // Moves label up and down
>>>>>>> bfc1b53892246ce9bbdbd784374f448c4a64ffbb
    }),
    fontSize: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], // Adjusts label font size
    }),
<<<<<<< HEAD
    transform: [
      {
        scale: animatedLabelScale,
      },
    ],
    color: isFocused ? "red" : "#aaa", // Color changes when focused
=======
    color: isFocused ? "red" : "#aaa",
>>>>>>> bfc1b53892246ce9bbdbd784374f448c4a64ffbb
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
<<<<<<< HEAD
      {isPassword && (
        <TouchableOpacity style={styles.eyeIcon} onPress={onEyePress}>
          <Icon
            name={secureTextEntry ? "visibility" : "visibility-off"}
            size={24}
            color="#aaa"
          />
        </TouchableOpacity>
      )}
=======
>>>>>>> bfc1b53892246ce9bbdbd784374f448c4a64ffbb
    </View>
  );
};

// Login Component
const Login = () => {
<<<<<<< HEAD
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

=======
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <View style={styles.container}>
>>>>>>> bfc1b53892246ce9bbdbd784374f448c4a64ffbb
      <Text style={styles.title}>Login</Text>

      {/* Input Fields with Floating Labels */}
      <FloatingLabelInput label="Email" value={email} onChangeText={setEmail} />
      <FloatingLabelInput
        label="Password"
        value={password}
        onChangeText={setPassword}
<<<<<<< HEAD
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
=======
        secureTextEntry
      />

      {/* Already Have Account */}
    <View style={styles.loginRowLogin}>
           <Link href="/ForgotPassword" style={styles.linkLogin}>
             <Text style={styles.loginTextLogin}>Already have an account?</Text>
           </Link>
           <Icon
             name="arrow-right-alt"
             size={20}
             color="red"
             style={styles.arrowIconLogin}
           />
         </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>SIGN UP</Text>
>>>>>>> bfc1b53892246ce9bbdbd784374f448c4a64ffbb
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
<<<<<<< HEAD
    backgroundColor: "#f9f9f9",
=======
    backgroundColor: "#fff",
>>>>>>> bfc1b53892246ce9bbdbd784374f448c4a64ffbb
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
<<<<<<< HEAD
    backgroundColor: "#fff",
    position: "relative",
    padding: 25,
    paddingBottom: 20,
    paddingTop: 20,
    marginBottom: 20,
=======
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    position: "relative",
    paddingTop: 20, // To make space for the floating label
>>>>>>> bfc1b53892246ce9bbdbd784374f448c4a64ffbb
  },
  input: {
    fontSize: 16,
    color: "#000",
    paddingVertical: 5,
  },
  inputFocused: {
    borderColor: "red", // Add border color when focused
  },
<<<<<<< HEAD
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
=======
  loginRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  loginText: {
>>>>>>> bfc1b53892246ce9bbdbd784374f448c4a64ffbb
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
<<<<<<< HEAD
  backButtonSignup: {
    position: "absolute",
    top: 80,
    left: 10,
    padding: 10,
    zIndex: 1, // Ensure the back button is above other elements
=======
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
  signUpButtonLogin: {
    backgroundColor: "red",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    width: "100%", // Full width for button
  },
  signUpButtonTextLogin: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
>>>>>>> bfc1b53892246ce9bbdbd784374f448c4a64ffbb
  },
});

export default Login;
