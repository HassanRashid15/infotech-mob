import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from "expo-router/drawer"
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
    </Drawer>
  );
}

export default _layout