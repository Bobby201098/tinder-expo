import { StyleSheet } from "react-native";

const PRIMARY_COLOR = "#007AFF";
const DARK_GRAY = "#8E8E93";
const BLACK = "#000000";
const WHITE = "#FFFFFF";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: BLACK,
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
  forgotPasswordText: {
    color: PRIMARY_COLOR,
    fontSize: 16,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: DARK_GRAY,
    marginVertical: 20,
  },
  registerButton: {
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
  },
  registerText: {
    color: PRIMARY_COLOR,
    fontSize: 16,
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
  },
  loginText: {
    color: PRIMARY_COLOR,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE, styles };