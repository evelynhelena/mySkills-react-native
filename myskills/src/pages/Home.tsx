import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData {
  id: string;
  title: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [allSkills, setAllSkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState("");

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      title: newSkill
    }
    console.log(data);
    setAllSkills((oldSkill) => [...oldSkill, data]);
    setNewSkill("");
  }

  function handleRemoveSkill(id: string) {
    setAllSkills(old => old.filter(skill => skill.id !== id))
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good night");
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Evelyn</Text>

      <Text style={styles.greeting}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#777"
        onChangeText={setNewSkill}
        value={newSkill}
      />

      <Button
        onPress={handleAddNewSkill}
        title="Add" />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      {/*  
        ScrollView: É indicado quando a lista é pequena
        FlatList: Indicado para quando o numero de elementos for grande, pois o FlatList carrega apenas o que cabe na tela
      */}

      <FlatList
        data={allSkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          <SkillCard skillTitle={item.title}
            onPress={() => handleRemoveSkill(item.id)}
          />}
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
  greeting: {
    color: "#fff",
    marginTop: 10,
    fontSize: 18,
  }
});
