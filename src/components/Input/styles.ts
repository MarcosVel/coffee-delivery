import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    height: 42,
    paddingLeft: 12,
    backgroundColor: COLORS.GRAY_200,
    borderRadius: 4,
    gap: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    color: COLORS.WHITE,
  },
});
