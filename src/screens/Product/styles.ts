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
  title: {
    marginRight: 2,
    marginVertical: 16,
    color: COLORS.WHITE,
  },
  description: {
    color: COLORS.WHITE,
    paddingRight: 12,
  },
  cup: {
    width: "100%",
    maxHeight: 330,
    bottom: -24,
    zIndex: 1,
  },
  value: {
    fontSize: 18,
    lineHeight: 18 * 1.3,
    fontFamily: "Roboto_400Regular",
    color: COLORS.GRAY_200,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginTop: 32,
  },
  footer: {
    paddingTop: 42,
    paddingHorizontal: 32,
  },
  footerText: {
    marginBottom: 8,
  },
  addCoffee: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.GRAY_700,
    borderRadius: 6,
    marginTop: 12,
    padding: 8,
    gap: 16,
  },
});
