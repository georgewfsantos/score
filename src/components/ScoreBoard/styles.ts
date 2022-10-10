import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderStyle: "solid",
  },
  playerOne: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    borderBottomStyle: "solid",
    flexDirection: "row",
    height: 40,
  },
  playerName: {
    width: "80%",
    borderRightWidth: 1,
    borderRightColor: "gray",
    borderRightStyle: "solid",
  },
  playerNameWrapper: {
    padding: 8,
  },
  name: {
    // textAlign: "center",
  },
  playerScore: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  score: {},
  playerTwo: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    borderBottomStyle: "solid",
    flexDirection: "row",
    height: 40,
  },
});
