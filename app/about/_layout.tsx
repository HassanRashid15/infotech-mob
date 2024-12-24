import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Example icon library

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ textAlign: "center", fontSize: 12 }}>Home</Text>
          ),
          tabBarLabelStyle: {
            position: "absolute",
            bottom: 0, // Move label down if needed
            paddingTop: 20,
          },
          tabBarItemStyle: {
            flexDirection: "column-reverse", // Stack icon on top of label
            alignItems: "center",
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ textAlign: "center", fontSize: 12 }}>Profile</Text>
          ),
          tabBarLabelStyle: {
            position: "absolute",
            bottom: 0, // Move label down if needed
            paddingTop: 20,
          },
          tabBarItemStyle: {
            flexDirection: "column-reverse", // Stack icon on top of label
            alignItems: "center",
          },
        }}
      />
    </Tabs>
  );
};

export default _layout;
