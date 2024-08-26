import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    minHeight: 76,
    width: "100%",
    position: "absolute",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 88,
    paddingHorizontal: 32,
    paddingBottom: 20,
    zIndex: 1,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.PURPLE,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
});
