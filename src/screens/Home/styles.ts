import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    position: "absolute",
    backgroundColor: COLORS.GRAY_100,
    paddingHorizontal: 32,
    paddingBottom: 140,
  },
  title: {
    marginTop: 20,
    marginBottom: 12,
    color: COLORS.WHITE,
  },
});
