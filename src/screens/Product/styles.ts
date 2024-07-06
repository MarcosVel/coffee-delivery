import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAY_900,
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.GRAY_100,
    paddingTop: 20,
    paddingHorizontal: 32,
  },
  tag: {
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    borderRadius: 25,
    backgroundColor: COLORS.GRAY_200,
  },
  tagText: {
    color: COLORS.WHITE,
    textTransform: "uppercase",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 16,
  },
  title: {
    color: COLORS.WHITE,
  },
  priceView: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  price: {
    color: COLORS.YELLOW_DARK,
  },
  description: {
    color: COLORS.WHITE,
    paddingRight: 12,
  },
  cup: {
    marginTop: "auto",
    bottom: -60,
  },
  footer: {
    paddingTop: 42,
    paddingHorizontal: 32,
  },
  footerText: {
    color: COLORS.GRAY_400,
    marginBottom: 8,
  },
});
