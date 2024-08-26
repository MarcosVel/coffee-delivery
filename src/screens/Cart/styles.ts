import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAY_900,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    backgroundColor: COLORS.WHITE,
    paddingTop: 28,
    paddingHorizontal: 32,
    paddingBottom: 36,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 16,
  },
  trash: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.RED_LIGHT,
    paddingHorizontal: 40,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 2,
  },
});
