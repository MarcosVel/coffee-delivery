import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { COLORS, FONT } from "../../styles/theme";
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: "purple" | "yellow";
};

export default function Button({ title, variant, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor:
            variant === "yellow" ? COLORS.YELLOW_DARK : COLORS.PURPLE_DARK,
        },
      ]}
      {...rest}
    >
      <Text style={[FONT.button, styles.title]}>{title}</Text>
    </TouchableOpacity>
  );
}
