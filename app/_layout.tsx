import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
const _layout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{ drawerLabel: "Home", title: "Home", headerShown: false }}
      />

      <Drawer.Screen
        name="about/index"
        options={{ drawerLabel: "Home", title: "Home" }}
      />
      <Drawer.Screen
        name="Login"
        options={{
          drawerLabel: () => null, // This removes the label from the drawer
          title: "Login", // This is still set for the title, though you can omit it if you want
          drawerItemStyle: { display: "none" }, // This hides the item from the drawer
          headerShown: false, // This removes the header
        }}
      />

      <Drawer.Screen
        name="Signup"
        options={{
          drawerLabel: () => null, // This removes the label from the drawer
          title: "Signup", // This is still set for the title, though you can omit it if you want
          drawerItemStyle: { display: "none" }, // This hides the item from the drawer
          headerShown: false, // This removes the header
        }}
      />
      <Drawer.Screen
        name="ForgotPassword"
        options={{
          drawerLabel: () => null, // This removes the label from the drawer
          title: "ForotPassword", // This is still set for the title, though you can omit it if you want
          drawerItemStyle: { display: "none" }, // This hides the item from the drawer
          headerShown: false, // This removes the header
        }}
      />
    </Drawer>
  );
};

export default _layout;
