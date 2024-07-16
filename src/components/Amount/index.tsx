import { Minus, Plus } from "phosphor-react-native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { COLORS, FONT } from "../../styles/theme";
import IconButton from "../IconButton";
import { styles } from "./styles";

type AmountProps = {
  border?: boolean;
};

export default function Amount({ border }: AmountProps) {
  const [value, setValue] = useState(0);

  function handleAmount(type?: string) {
    if (type === "minus") {
      return setValue((prev) => prev - 1);
    }

    setValue((prev) => prev + 1);
  }

  return (
    <View style={[styles.container, { borderWidth: border ? 1 : 0 }]}>
      <IconButton onPress={() => handleAmount("minus")} disabled={value === 0}>
        <Minus color={COLORS.PURPLE} size={20} />
      </IconButton>

      <Text style={[FONT.textMd, styles.amountText]}>{value}</Text>

      <IconButton onPress={() => handleAmount()}>
        <Plus color={COLORS.PURPLE} size={20} />
      </IconButton>
    </View>
  );
}
