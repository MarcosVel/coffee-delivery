import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT } from "../../styles/theme";
import { styles } from "./styles";

type SelectProps = {
  onSelect: (selectValue: number) => void;
};

export default function Select({ onSelect }: SelectProps) {
  const [selected, setSelected] = useState(0);

  function handleSelection(selectValue: number) {
    setSelected(selectValue);
    onSelect(selectValue);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={selected === 114 ? styles.selected : styles.select}
        activeOpacity={0.4}
        onPress={() => handleSelection(114)}
      >
        <Text
          style={
            selected === 114
              ? [FONT.button, { color: COLORS.PURPLE }]
              : [FONT.textSm, { color: COLORS.GRAY_300 }]
          }
        >
          114ml
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={selected === 140 ? styles.selected : styles.select}
        activeOpacity={0.4}
        onPress={() => handleSelection(140)}
      >
        <Text
          style={
            selected === 140
              ? [FONT.button, { color: COLORS.PURPLE }]
              : [FONT.textSm, { color: COLORS.GRAY_300 }]
          }
        >
          140ml
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={selected === 227 ? styles.selected : styles.select}
        activeOpacity={0.4}
        onPress={() => handleSelection(227)}
      >
        <Text
          style={
            selected === 227
              ? [FONT.button, { color: COLORS.PURPLE }]
              : [FONT.textSm, { color: COLORS.GRAY_300 }]
          }
        >
          227ml
        </Text>
      </TouchableOpacity>
    </View>
  );
}
