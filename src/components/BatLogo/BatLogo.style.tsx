import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: "#1b263b",
    borderColor: "#FFD700",
    borderWidth: 2,
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "#E5BF3C",
  },
  logo: { resizeMode: "contain", height: 180 },
});
