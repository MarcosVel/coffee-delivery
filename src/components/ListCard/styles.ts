import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: COLORS.GRAY_800,
    paddingTop: 16,
    paddingLeft: 8,
    paddingRight: 16,
    paddingBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 36,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 6,
    borderColor: COLORS.GRAY_700,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    overflow: "visible",
    gap: 12,
  },
  image: {
    width: 96,
    height: 96,
    top: -36,
  },
  info: {
    flex: 1,
  },
  title: {
    color: COLORS.GRAY_200,
  },
  description: {
    marginTop: 2,
    color: COLORS.GRAY_400,
  },
  priceView: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 8,
  },
  price: {
    color: COLORS.YELLOW_DARK,
  },
});
