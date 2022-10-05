import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/login";
import User from "./components/user";
import FitBack from "./components/fitback";
import AboutBook from "./components/aboutbook";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="User"
          component={User}
          options={{ title: "страница всех книг (2 страница)" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "1 страница" }}
        />

        <Stack.Screen
          name="FitBack"
          component={FitBack}
          options={{ title: "страница отзывов (4 страница)" }}
        />

        <Stack.Screen
          name="AboutBook"
          component={AboutBook}
          options={{ title: "о книге (5 страница)" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
