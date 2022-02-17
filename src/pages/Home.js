import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills((oldSkills) => [...oldSkills, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wellcome, Leo</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#999"
        onChangeText={setNewSkill}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 40 }]}>My Skills</Text>

      {mySkills.map((skill, index) => (
        <TouchableOpacity style={styles.buttonSkill} key={index}>
          <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    borderRadius: 6,
    fontSize: 18,
    padding: 16,
    marginTop: 28,
  },
  button: {
    backgroundColor: "#a370f7",
    padding: 16,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 8,
  },
  textSkill: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
