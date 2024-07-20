import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.GRAY_900,
    paddingHorizontal: 64,
  },
  title: {
    textAlign: "center",
    color: COLORS.YELLOW_DARK,
    marginTop: 40,
  },
  description: {
    textAlign: "center",
    color: COLORS.GRAY_200,
    marginTop: 4,
  },
  button: {
    width: "100%",
    marginTop: 64,
  },
});
