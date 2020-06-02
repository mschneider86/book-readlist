import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingTop: Constants.statusBarHeight + 20,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: "#3498db",
  },
  addButton: {
    backgroundColor: "#3498db",
    width: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  toolBox: {
    flexDirection: "row",
    marginBottom: 5,
  },
  itemsContainer: {
    flexDirection: "row",
  },
  itemButton: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
  },
  editButton: {},
  deleteButton: {},
  itemRead: {
    textDecorationLine: "line-through",
    color: "#95a5a6",
  },
});
