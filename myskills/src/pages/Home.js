import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  ScrollView,
  FlatList,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [allSkills, setAllSkills] = useState([]);

  function handleAddNewSkill() {
    setAllSkills((oldSkill) => [
      ...oldSkill,
      { id: Date.now(), title: newSkill },
    ]);
    setNewSkill("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Evelyn</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#777"
        onChangeText={setNewSkill}
        value={newSkill}
      />

      <Button handleAddNewSkill={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      {/*  
        ScrollView: É indicado quando a lista é pequena
        FlatList: Indicado para quando o numero de elementos for grande, pois o FlatList carrega apenas o que cabe na tela
      */}

      <FlatList
        data={allSkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SkillCard skillTitle={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
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
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
  },
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 10,
  },
  textSkill: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
