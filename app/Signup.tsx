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
  toggleSecureTextEntry,
  isPasswordField = false, // Add this prop to indicate if the field is a password field
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedLabelPosition = useState(new Animated.Value(value ? 1 : 0))[0];
  const animatedLabelScale = useState(new Animated.Value(1))[0];

  const handleFocus = () => {
    setIsFocused(true);
    // Animate label position (translateY)
    Animated.timing(animatedLabelPosition, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    // Animate label scale
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
      // Animate label position (translateY) back to original position
      Animated.timing(animatedLabelPosition, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
      // Reset label scale
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
    left: 12,
    top: 0,
    transform: [
      {
        translateY: animatedLabelPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [12, 0],
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
      {isPasswordField && (
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={toggleSecureTextEntry}
        >
          <Icon
            name={secureTextEntry ? "visibility-off" : "visibility"}
            size={24}
            color="#888"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

// Signup Component
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true); // Track password visibility
  const router = useRouter();



  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry); // Toggle password visibility
  };

  return (
    <View style={styles.containerSignup}>
      <Text style={styles.titleSignup}>Sign up</Text>
      {/* Input Fields with Floating Labels */}
      <FloatingLabelInputSignup
        label="Name"
        value={name}
        onChangeText={setName}
      />
      <FloatingLabelInputSignup
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <FloatingLabelInputSignup
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={secureTextEntry}
        toggleSecureTextEntry={togglePasswordVisibility}
        isPasswordField={true} // Indicate this is the password field
      />

      <View style={styles.loginRowSignup}>
        <Text style={styles.loginTextSignup}>Already have an account? </Text>
        <Link href="/Login" style={styles.linkSignup}>
          <Icon
            name="arrow-right-alt"
            size={20}
            color="red"
            style={styles.arrowIconSignup}
          />
        </Link>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButtonSignup}>
        <Text style={styles.signUpButtonTextSignup}>SIGN UP</Text>
      </TouchableOpacity>

      {/* Social Login */}
      <Text style={styles.socialTextSignup}>
        Or sign up with a social account
      </Text>
      <View style={styles.socialButtonsSignup}>
        <TouchableOpacity style={styles.socialButtonSignup}>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency/48/null/google-logo.png",
            }}
            style={styles.socialIconSignup}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButtonSignup}>
          <Image
            source={{
              uri: "https://img.icons8.com/color/48/null/facebook-new.png",
            }}
            style={styles.socialIconSignup}
          />
        </TouchableOpacity>
      </View>
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
    top: 40,
    left: 20,
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
    paddingLeft: 5,
    paddingTop: 18,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 20,
    padding: 5,
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
    width: "100%",
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
    marginBottom: 20,
  },
socialButtonSignup: {
  padding:15,
  marginHorizontal: 10,
  borderRadius: 18,
  borderWidth: 1,
  backgroundColor: "#fff",
  borderColor: "#ccc",
  // iOS shadow properties
  shadowColor: '#000',         // Shadow color
  shadowOffset: { width: 0, height: 2 }, // Shadow offset
  shadowOpacity: 0.1,          // Shadow opacity
  shadowRadius: 4,             // Shadow blur radius
  // Android shadow (elevation)
  elevation: 5,                // Shadow elevation for Android
}
,
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
