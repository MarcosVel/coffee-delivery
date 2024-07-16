import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: COLORS.GRAY_600,
    borderRadius: 6,
    gap: 4,
  },
  amountButton: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  amountText: {
    color: COLORS.GRAY_100,
    textAlign: "center",
  },
});
