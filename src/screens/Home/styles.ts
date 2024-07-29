import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.GRAY_900,
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
  carousel: {
    marginTop: 352,
  },
  listFilter: {
    height: 90,
    paddingHorizontal: 32,
    justifyContent: "center",
    backgroundColor: COLORS.GRAY_900,
    shadowColor: COLORS.GRAY_500,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
    zIndex: 1,
    gap: 12,
  },
  filterHeaderTitle: {
    color: COLORS.GRAY_300,
  },
  filters: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  filterOption: {
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    borderRadius: 100,
    borderColor: COLORS.PURPLE,
    borderWidth: 1,
  },
  sectionTitle: {
    color: COLORS.GRAY_400,
    paddingTop: 8,
  },
  listContainer: {
    paddingTop: 8,
    paddingHorizontal: 32,
    gap: 32,
    marginBottom: 48,
  },
});
