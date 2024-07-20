import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Text, View } from "react-native";
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  Keyframe,
} from "react-native-reanimated";
import { Button, Scooter } from "../../components";
import { AppNavigationProps } from "../../routes/app.routes";
import { FONT } from "../../styles/theme";
import { styles } from "./styles";

const { width } = Dimensions.get("window");

export default function Confirmation() {
  const { navigate } = useNavigation<AppNavigationProps>();

  const scooterEnteringKeyframe = new Keyframe({
    0: {
      opacity: 0,
      transform: [{ translateX: -width }],
    },
    70: {
      opacity: 1,
    },
    100: {
      transform: [{ translateX: 0 }],
      easing: Easing.elastic(1.2),
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        entering={scooterEnteringKeyframe.delay(500).duration(1100)}
      >
        <Scooter />
      </Animated.View>

      <Animated.View
        entering={FadeInDown.delay(500).duration(900).easing(Easing.elastic(1))}
      >
        <Text style={[FONT.titleLg, styles.title]}>Uhu! Pedido confirmado</Text>
        <Text style={[FONT.textSm, styles.description]}>
          Agora é só aguardar que logo o café{"\n"}chegará até você!
        </Text>
      </Animated.View>

      <Animated.View
        style={styles.button}
        entering={FadeIn.delay(1500).duration(400)}
      >
        <Button title="Ir para a home" onPress={() => navigate("home")} />
      </Animated.View>
    </View>
  );
}
