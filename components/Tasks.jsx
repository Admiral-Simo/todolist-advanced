import { View, Text, ScrollView } from "react-native";
import React from "react";
import Task from "./Task";

const Tasks = ({tasks}) => {
  return (
    <>
        <ScrollView>
          {tasks.map((task) => {
            return (
              <Task
                key={task.createdAt}
                Task={task.task}
                createdAt={task.createdAt}
              />
            );
          })}
        </ScrollView>
    </>
  );
};

export default Tasks;
