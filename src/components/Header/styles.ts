import { StyleSheet } from "react-native";

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
  location: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
