import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { FONT } from "../../styles/theme";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={FONT.titleXl}>
        Encontre o café perfeito para qualquer hora do dia
      </Text>
    </SafeAreaView>
  );
}
