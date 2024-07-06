import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT } from "../../styles/theme";
import { styles } from "./styles";

export default function Select() {
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={selected === 114 ? styles.selected : styles.select}
        activeOpacity={0.4}
        onPress={() => setSelected(114)}
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
        onPress={() => setSelected(140)}
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
        onPress={() => setSelected(227)}
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
