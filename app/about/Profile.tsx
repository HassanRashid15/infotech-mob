import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="search" size={24} color="black" />
      </View>
      <View>
        <Text style={styles.title}>My profile</Text>

        <View style={styles.profileSection}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
            }} // Replace with the actual image URL
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.profileName}>Matilda Brown</Text>
            <Text style={styles.profileEmail}>matildabrown@mail.com</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.menuItem}>
        <View>
          <Text style={styles.menuTitle}>My orders</Text>
          <Text style={styles.menuSubtitle}>Already have 12 orders</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <View>
          <Text style={styles.menuTitle}>Shipping addresses</Text>
          <Text style={styles.menuSubtitle}>2 addresses</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <View>
          <Text style={styles.menuTitle}>Payment methods</Text>
          <Text style={styles.menuSubtitle}>Visa **34</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <View>
          <Text style={styles.menuTitle}>Promocodes</Text>
          <Text style={styles.menuSubtitle}>You have special promocodes</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <View>
          <Text style={styles.menuTitle}>My reviews</Text>
          <Text style={styles.menuSubtitle}>Reviews for 4 items</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <View>
          <Text style={styles.menuTitle}>Settings</Text>
          <Text style={styles.menuSubtitle}>Notifications, password</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 14,
    color: "#888",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  menuTitle: {
    fontSize: 16,
  },
  menuSubtitle: {
    fontSize: 12,
    color: "#888",
  },
});

export default Profile;
