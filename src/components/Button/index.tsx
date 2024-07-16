import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { COLORS, FONT } from "../../styles/theme";
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: "purple" | "yellow";
  disabled?: boolean;
};

export default function Button({
  title,
  variant,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor:
            variant === "yellow" ? COLORS.YELLOW_DARK : COLORS.PURPLE_DARK,
          opacity: disabled ? 0.3 : 1,
        },
      ]}
      activeOpacity={0.7}
      disabled={disabled}
      {...rest}
    >
      <Text style={[FONT.button, styles.title]}>{title}</Text>
    </TouchableOpacity>
  );
}
