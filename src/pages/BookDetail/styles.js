import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: Constants.statusBarHeight + 20,
  },
  pageTitle: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    borderBottomColor: "#f39c12",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  cameraButton: {
    backgroundColor: "#f39c12",
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#f39c12",
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  invalidSaveButton: {
    opacity: 0.5,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  cancelButton: {
    alignSelf: "center",
  },
  cancelButtonText: {
    color: "#95a5a6",
  },
});
