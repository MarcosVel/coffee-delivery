import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT } from "../../styles/theme";
import { styles } from "./styles";
import Animated, { StyleProps } from "react-native-reanimated";

type SelectProps = {
  onSelect: (selectValue: number) => void;
  animatedStyle: StyleProps;
};

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

export default function Select({ onSelect, animatedStyle }: SelectProps) {
  const [selected, setSelected] = useState(0);

  function handleSelection(selectValue: number) {
    setSelected(selectValue);
    onSelect(selectValue);
  }

  return (
    <View style={styles.container}>
      <AnimatedButton
        style={[
          animatedStyle,
          selected === 114 ? styles.selected : styles.select,
        ]}
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
      </AnimatedButton>

      <AnimatedButton
        style={[
          animatedStyle,
          selected === 140 ? styles.selected : styles.select,
        ]}
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
      </AnimatedButton>

      <AnimatedButton
        style={[
          animatedStyle,
          selected === 227 ? styles.selected : styles.select,
        ]}
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
      </AnimatedButton>
    </View>
  );
}
