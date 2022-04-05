import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from "react-native";

interface skillCardPros extends TouchableOpacityProps {
  skillTitle: string
}

export function SkillCard({ skillTitle, ...rest }: skillCardPros) {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
      {...rest}>
      <Text style={styles.textSkill}>{skillTitle}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
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