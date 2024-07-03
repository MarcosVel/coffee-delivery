import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/theme";

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: COLORS.GRAY_900,
  },
  container: {
    flexGrow: 1,
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
  coffee: {
    position: "absolute",
    top: 42,
    right: -24,
    zIndex: 2,
  },
  main: {
    paddingTop: 280,
  },
});
