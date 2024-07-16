import { ActivityIndicator, View } from "react-native";
import { COLORS } from "../../styles/theme";
import { styles } from "./styles";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={COLORS.PURPLE} />
    </View>
  );
}
