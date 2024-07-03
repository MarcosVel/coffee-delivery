import { MagnifyingGlass } from "phosphor-react-native";
import React, { forwardRef, useState } from "react";
import { TextInput, View } from "react-native";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { COLORS, FONT } from "../../styles/theme";
import { styles } from "./styles";

type MagnifyingGlassProps = {
  size?: number;
  style: {
    color: string;
  };
};

const MagnifyingGlassWithRef = forwardRef<MagnifyingGlassProps, any>(
  ({ size, style, ...props }, ref) => (
    <MagnifyingGlass size={size} color={style.color} {...props} />
  )
);

const AnimatedIcon = Animated.createAnimatedComponent(MagnifyingGlassWithRef);

export default function Input() {
  const [inputValue, setInputValue] = useState("");

  const search = useSharedValue(0);

  const animatedColorStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        search.value,
        [0, 1, 2],
        [COLORS.GRAY_400, COLORS.YELLOW, COLORS.YELLOW_DARK]
      ),
    };
  });

  return (
    <View style={styles.container}>
      <AnimatedIcon size={16} style={animatedColorStyle} />

      <TextInput
        defaultValue={inputValue}
        placeholder="Pesquisar"
        placeholderTextColor={COLORS.GRAY_400}
        style={[FONT.textSm, styles.input]}
        onFocus={() => {
          if (inputValue.length > 0) {
            return (search.value = withTiming(2, { easing: Easing.ease }));
          }

          search.value = withTiming(1, { easing: Easing.ease });
        }}
        onBlur={() => {
          search.value = withTiming(inputValue ? 2 : 0, {
            easing: Easing.ease,
          });
        }}
        onChangeText={(text) => {
          setInputValue(text);
          search.value = withTiming(text ? 2 : 1, { easing: Easing.ease });
        }}
      />
    </View>
  );
}
