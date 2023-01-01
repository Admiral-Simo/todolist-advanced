import { View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const CheckBox = ({ isSelected, setIsSelected }) => {
  return (
    <View
      style={isSelected && { backgroundColor: "white" }}
      className="w-7 h-7 rounded-3xl border border-[#ff008f] mr-3 items-center justify-center"
    >
      {isSelected ? (
        <Ionicons name="checkmark-done-sharp" size={20} color="black" />
      ) : (
        <Ionicons name="ios-close-sharp" size={20} color="black" />
      )}
    </View>
  );
};

export default CheckBox;
