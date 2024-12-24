import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeroSection from "../HeroSection";
import Sales from "../Sales";

const index = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 0 }}>
      <HeroSection />
   <Sales/>
    </ScrollView>
  );
};

export default index;
