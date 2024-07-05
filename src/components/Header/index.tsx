import { MapPin, ShoppingCart } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT } from "../../styles/theme";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <MapPin size={20} color={COLORS.PURPLE} weight="fill" />
        <Text style={[FONT.textSm, { color: COLORS.WHITE }]}>
          Porto Alegre, RS
        </Text>
      </View>

      <TouchableOpacity hitSlop={10}>
        <ShoppingCart size={20} color={COLORS.YELLOW_DARK} weight="fill" />
      </TouchableOpacity>
    </View>
  );
}
