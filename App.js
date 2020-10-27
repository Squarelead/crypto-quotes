import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AboutScreen from "./screens/AboutScreen.js";
import QuotesScreen from "./screens/QuotesScreen.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Quotes"
          component={QuotesScreen}
          options={{
            title: "Poloniex",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#FAFFFF" },
            headerTitleStyle: { color: "#3F8695" },
            headerTintColor: "#3F8695",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
