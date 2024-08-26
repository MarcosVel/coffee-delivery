import { useNavigation } from "@react-navigation/native";
import { MapPin, ShoppingCart } from "phosphor-react-native";
import { Image, TouchableOpacity, View } from "react-native";
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
      <View style={styles.user}>
        <TouchableOpacity onPress={() => navigate("login")}>
          <Image
            source={{ uri: "http://github.com/MarcosVel.png" }}
            style={styles.avatar}
          />
        </TouchableOpacity>

        <View>
          <Animated.Text style={[FONT.titleSm, textStyle]}>
            Marcos Veloso
          </Animated.Text>

          <View style={styles.location}>
            <MapPin size={16} color={COLORS.PURPLE} weight="fill" />
            <Animated.Text style={[FONT.textXs, textStyle]}>
              José Gonçalves Pereira, nº 129
            </Animated.Text>
          </View>
        </View>
      </View>

      <TouchableOpacity hitSlop={10} onPress={() => navigate("cart")}>
        <ShoppingCart size={20} color={COLORS.YELLOW_DARK} weight="fill" />
      </TouchableOpacity>
    </Animated.View>
  );
}
