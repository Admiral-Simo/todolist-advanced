import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CheckBox from "./CheckBox";

const Task = ({ Task, createdAt }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <TouchableOpacity
      className="bg-white p-5 rounded-lg flex-row items-center mb-1"
      style={
        isSelected
          ? { backgroundColor: "#ff77a3" }
          : { backgroundColor: "white" }
      }
      onPress={() => setIsSelected(!isSelected)}
    >
      <CheckBox isSelected={isSelected} />
      <View>
        <Text
          style={isSelected ? { color: "white" } : { color: "black" }}
          className="font-bold text-md"
        >
          {Task}
        </Text>
        <Text
          style={isSelected ? { color: "black" } : { color: "grey" }}
          className="text-xs"
        >
          Tasks - {createdAt}
          {/* Fri,Feb 7,9:00 AM */}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
