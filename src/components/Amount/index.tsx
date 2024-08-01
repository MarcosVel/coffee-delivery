import { Minus, Plus } from "phosphor-react-native";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { COLORS, FONT } from "../../styles/theme";
import IconButton from "../IconButton";
import { styles } from "./styles";

type AmountProps = {
  border?: boolean;
  defaultValue?: number;
  hasMinimum?: boolean;
  onChange: (amountSelected: number) => void;
};

export default function Amount({
  border,
  defaultValue = 0,
  hasMinimum,
  onChange,
}: AmountProps) {
  const [value, setValue] = useState(0 || defaultValue);

  function handleAmount(type?: string) {
    if (type === "minus" && hasMinimum && value === 1) {
      return;
    }

    if (type === "minus") {
      setValue((prev) => prev - 1);
      onChange(value - 1);
      return;
    }

    setValue((prev) => prev + 1);
    onChange(value + 1);
  }

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <View style={[styles.container, { borderWidth: border ? 1 : 0 }]}>
      <IconButton
        onPress={() => handleAmount("minus")}
        disabled={value === 0 || (hasMinimum && value === 1)}
      >
        <Minus color={COLORS.PURPLE} size={20} />
      </IconButton>

      <Text style={[FONT.textMd, styles.amountText]}>{value}</Text>

      <IconButton onPress={() => handleAmount()}>
        <Plus color={COLORS.PURPLE} size={20} />
      </IconButton>
    </View>
  );
}
