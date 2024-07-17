import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GRAY_700,
    gap: 20,
  },
  image: {
    width: 64,
    height: 64,
  },
  spaceBetween: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  title: {
    color: COLORS.GRAY_100,
  },
  ml: {
    top: -2,
    color: COLORS.GRAY_400,
  },
  amount: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
