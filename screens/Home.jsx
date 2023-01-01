import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import Tasks from "../components/Tasks";
import { exactTime, getTodayDate } from "../logic/time";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";

const Home = ({ navigation }) => {
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTodayDate(setDate);
    const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          task: doc.data().task,
          createdAt: exactTime(
            new Date(
              doc.data().createdAt.seconds * 1000 +
                doc.data().createdAt.nanoseconds / 1000000
            )
          ),
        }))
      );
    });
    return unsubscribe;
  }, []);

  return (
    <View
      style={styles.container}
      className="bg-[#5f73c0] relative px-6 flex-1"
    >
      <StatusBar style="light" />

      <View className="my-10">
        <Text className="text-white font-bold text-3xl">My Day</Text>
        <Text className="text-white text-lg">{date}</Text>
      </View>
      <View>
        <Tasks tasks={tasks} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("AddTask")}
        className="shadow-lg bg-white rounded-full p-3 absolute bottom-7 right-7"
      >
        <AntDesign name="plus" size={30} color="#3063ab" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});
