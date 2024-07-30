import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/theme";

export const CARD_WIDTH = 160;

export const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 32,
    paddingTop: 28,
    paddingBottom: 32,
    gap: 12,
  },
  container: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.GRAY_700,
    backgroundColor: COLORS.GRAY_800,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 36,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 6,
    paddingHorizontal: 12,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    overflow: "visible",
    elevation: 2,
  },
  image: {
    width: 64,
    height: 64,
    marginTop: -16,
    marginBottom: 16,
  },
  tag: {
    backgroundColor: COLORS.PURPLE_LIGHT,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 80,
    marginBottom: 12,
  },
  tagText: {
    fontSize: 10,
    lineHeight: 10 * 1.3,
    fontFamily: "Roboto_700Bold",
    color: COLORS.PURPLE_DARK,
    textAlign: "center",
    textTransform: "uppercase",
  },
  info: {
    width: CARD_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: COLORS.GRAY_200,
    textAlign: "center",
  },
  description: {
    fontSize: 12,
    lineHeight: 12 * 1.3,
    fontFamily: "Roboto_400Regular",
    color: COLORS.GRAY_400,
    textAlign: "center",
  },
  currency: {
    fontSize: 12,
    fontFamily: "Roboto_400Regular",
    color: COLORS.YELLOW_DARK,
  },
  priceView: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 16,
  },
  price: {
    color: COLORS.YELLOW_DARK,
  },
});
