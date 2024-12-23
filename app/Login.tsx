import { Link } from "expo-router";
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

// FloatingLabelInput Component
const FloatingLabelInput = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedLabelPosition = useState(new Animated.Value(value ? 1 : 0))[0];

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedLabelPosition, {
      toValue: 1,
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
    }
  };

  const labelStyle = {
    position: "absolute",
    left: 0,
    top: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 0], // Moves label up and down
    }),
    fontSize: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], // Adjusts label font size
    }),
    color: isFocused ? "red" : "#aaa",
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
    </View>
  );
};

// Login Component
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Input Fields with Floating Labels */}
      <FloatingLabelInput label="Email" value={email} onChangeText={setEmail} />
      <FloatingLabelInput
        label="Password"
        value={password}
        onChangeText={setPassword}
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
    backgroundColor: "#fff",
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
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    position: "relative",
    paddingTop: 20, // To make space for the floating label
  },
  input: {
    fontSize: 16,
    color: "#000",
    paddingVertical: 5,
  },
  inputFocused: {
    borderColor: "red", // Add border color when focused
  },
  loginRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  loginText: {
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
  },
});

export default Login;
