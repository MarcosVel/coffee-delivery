import { StyleSheet } from "react-native";

export const COLORS = {
  WHITE: "#FFFFFF",

  GRAY_100: "#272221",
  GRAY_200: "#403937",
  GRAY_300: "#574F4D",
  GRAY_400: "#8D8686",
  GRAY_500: "#D7D5D5",
  GRAY_600: "#E6E5E5",
  GRAY_700: "#EDEDED",
  GRAY_800: "#F3F2F2",
  GRAY_900: "#FAFAFA",

  RED_LIGHT: "#F2DFD8",
  RED: "#E8BAAB",
  RED_DARK: "#C44117",

  YELLOW_DARK: "#C47F17",
  YELLOW: "#DBAC2C",
  PURPLE_DARK: "#3A4877",
  PURPLE: "#576CB1",
  PURPLE_LIGHT: "#EBE5F9",
};

export const FONT = StyleSheet.create({
  titleXl: {
    fontSize: 36,
    lineHeight: 36 * 1.3,
    fontFamily: "Baloo2_700Bold",
  },
  titleLg: {
    fontSize: 24,
    lineHeight: 24 * 1.3,
    fontFamily: "Baloo2_700Bold",
  },
  titleMd: {
    fontSize: 20,
    lineHeight: 20 * 1.3,
    fontFamily: "Baloo2_700Bold",
  },
  titleSm: {
    fontSize: 16,
    lineHeight: 16 * 1.3,
    fontFamily: "Baloo2_700Bold",
  },
  titleXs: {
    fontSize: 14,
    lineHeight: 14 * 1.3,
    fontFamily: "Baloo2_700Bold",
  },

  textLg: {
    fontSize: 20,
    lineHeight: 20 * 1.3,
    fontFamily: "Roboto_400Regular",
  },
  textMd: {
    fontSize: 16,
    lineHeight: 16 * 1.3,
    fontFamily: "Roboto_400Regular",
  },
  textSm: {
    fontSize: 14,
    lineHeight: 14 * 1.3,
    fontFamily: "Roboto_400Regular",
  },
  textXs: {
    fontSize: 12,
    lineHeight: 12 * 1.3,
    fontFamily: "Roboto_400Regular",
  },

  tag: {
    fontSize: 10,
    lineHeight: 10 * 1.3,
    fontFamily: "Roboto_700Bold",
  },
  button: {
    fontSize: 14,
    lineHeight: 14 * 1.6,
    fontFamily: "Roboto_700Bold",
  },
});
