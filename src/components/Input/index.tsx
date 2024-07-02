import { MagnifyingGlass } from "phosphor-react-native";
import React from "react";
import { Text, TextInput, View } from "react-native";
import { COLORS, FONT } from "../../styles/theme";
import { styles } from "./styles";

export default function Input() {
  return (
    <View style={styles.container}>
      <MagnifyingGlass size={16} color={COLORS.GRAY_400} />
      <TextInput
        placeholder="Pesquisar"
        placeholderTextColor={COLORS.GRAY_400}
        style={[FONT.textSm, styles.input]}
      />
    </View>
  );
}
