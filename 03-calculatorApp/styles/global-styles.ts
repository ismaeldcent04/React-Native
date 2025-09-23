import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },

  calculatorContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  mainResult: {
    color: Colors.dark.text,
    fontSize: 70,
    textAlign: "right",
    fontWeight: "400",
  },
  subResult: {
    color: "gray",
    fontSize: 40,
    textAlign: "right",
    fontWeight: "300",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: "grey",
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    color: "white",
    fontWeight: "300",
  },
});
