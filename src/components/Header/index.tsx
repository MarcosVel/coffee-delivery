import { useNavigation } from "@react-navigation/native";
import { MapPin, ShoppingCart } from "phosphor-react-native";
import { TouchableOpacity, View } from "react-native";
import Animated, { SlideInUp, StyleProps } from "react-native-reanimated";
import { AppNavigationProps } from "../../routes/app.routes";
import { COLORS, FONT } from "../../styles/theme";
import { styles } from "./styles";

type HeaderProps = {
  animatedStyles: StyleProps;
  textStyle: StyleProps;
};

export default function Header({ animatedStyles, textStyle }: HeaderProps) {
  const { navigate } = useNavigation<AppNavigationProps>();

  return (
    <Animated.View
      entering={SlideInUp.duration(1000)}
      style={[styles.container, animatedStyles]}
    >
      <View style={styles.location}>
        <MapPin size={20} color={COLORS.PURPLE} weight="fill" />
        <Animated.Text style={[FONT.textSm, textStyle]}>
          Porto Alegre, RS
        </Animated.Text>
      </View>

      <TouchableOpacity hitSlop={10} onPress={() => navigate("cart")}>
        <ShoppingCart size={20} color={COLORS.YELLOW_DARK} weight="fill" />
      </TouchableOpacity>
    </Animated.View>
  );
}
