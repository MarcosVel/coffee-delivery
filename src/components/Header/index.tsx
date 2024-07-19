import { useNavigation } from "@react-navigation/native";
import { MapPin, ShoppingCart } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { AppNavigationProps } from "../../routes/app.routes";
import { COLORS, FONT } from "../../styles/theme";
import { styles } from "./styles";

export default function Header() {
  const { navigate } = useNavigation<AppNavigationProps>();

  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <MapPin size={20} color={COLORS.PURPLE} weight="fill" />
        <Text style={[FONT.textSm, { color: COLORS.WHITE }]}>
          Porto Alegre, RS
        </Text>
      </View>

      <TouchableOpacity hitSlop={10} onPress={() => navigate("cart")}>
        <ShoppingCart size={20} color={COLORS.YELLOW_DARK} weight="fill" />
      </TouchableOpacity>
    </View>
  );
}
