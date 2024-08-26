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
    backgroundColor: COLORS.GRAY_900,
    gap: 20,
  },
  image: {
    width: 64,
    height: 64,
  },
  spaceBetween: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  title: {
    color: COLORS.GRAY_100,
  },
  amount: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
