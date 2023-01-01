import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";

const AddTask = ({ navigation }) => {
  const [task, setTask] = useState("");
  const addTask = () => {
    if (task !== "") {
      addDoc(collection(db, "tasks"), {
        task: task,
        createdAt: serverTimestamp(),
      });
      navigation.goBack();
    }
  };
  return (
    <View className="bg-[#5f73c0] pt-20 flex-1 px-6">
      <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
        <AntDesign name="arrowleft" size={30} color="white" />
      </TouchableOpacity>
      <TextInput
        placeholder="Example: Walk the dog"
        className="p-4 rounded-lg bg-white pl-6 mt-16"
        value={task}
        onChangeText={(text) => setTask(text)}
        onSubmitEditing={addTask}
      />
      <TouchableOpacity
        onPress={addTask}
        className="bg-green-400 rounded-lg justify-center items-center mt-3 shadow-lg"
      >
        <Text className="text-white font-bold text-lg p-3">Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTask;
