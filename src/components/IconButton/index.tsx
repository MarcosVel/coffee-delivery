import React, { ReactNode, useEffect } from "react";
import { Pressable, PressableProps } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { COLORS } from "../../styles/theme";
import { styles } from "./styles";

type IconButtonProps = PressableProps & {
  hasBgColor?: boolean;
  disabled?: boolean;
  children: ReactNode;
};

export default function IconButton({
  hasBgColor,
  disabled,
  children,
  ...rest
}: IconButtonProps) {
  const buttonScale = useSharedValue(1);
  const buttonIsDisabled = useSharedValue(0);

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonScale.value }],
      opacity: interpolate(buttonIsDisabled.value, [0, 1], [1, 0.3]),
    };
  });

  function onPressIn() {
    buttonScale.value = withSpring(0.6, { duration: 200 });
  }

  function onPressOut() {
    buttonScale.value = withSpring(1, { duration: 200 });
  }

  useEffect(() => {
    buttonIsDisabled.value = withTiming(disabled ? 1 : 0, { duration: 200 });
  }, [disabled]);

  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: hasBgColor ? COLORS.GRAY_700 : "transparent",
        },
      ]}
      disabled={disabled}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      {...rest}
    >
      <Animated.View style={buttonAnimatedStyle}>{children}</Animated.View>
    </Pressable>
  );
}
