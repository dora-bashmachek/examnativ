import { AppRegistry } from "react-native";
import App from "./App";

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});

// import { AppRegistry } from "react-native";
// import UserScreen from "./components/user";

// AppRegistry.registerComponent("UserScreen", () => UserScreen);

// AppRegistry.runApplication("UserScreen", {
//   rootTag: document.getElementById("root")
// });
