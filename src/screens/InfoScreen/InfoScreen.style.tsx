import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#0d1b2a",
    flex: 1,
    justifyContent: "center",
  },
  photo: {
    width: 250,
    height: 250,
    borderRadius: 125,
    marginBottom: 30,
    borderColor: "#E5BF3C",
    borderWidth: 3,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    letterSpacing: 1.5,
    marginBottom: 30,
    textTransform: "uppercase",
  },
  techList: { alignItems: "center" },
  tech: {
    color: "#E5BF3C",
    fontWeight: "bold",
    textTransform: "uppercase",
    width: "100%",
  },
});
