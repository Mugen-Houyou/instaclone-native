
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import CreateAccount from "../screens/CreateAccount";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";

const Stack = createStackNavigator();

export default function LoggedOutNav(){
  return <Stack.Navigator
    initialRouteName="Welcome"
    screenOptions={{presentation:"modal"}}
  > 
    <Stack.Screen 
      name="Welcome" 
      component={Welcome} 
      options={{
        headerShown:false
      }}
    />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen options={{
      headerTintColor: "white",
      headerTransparent: true,
      headerTitle: () => false,
    }} name="CreateAccount" component={CreateAccount} />
  </Stack.Navigator>
}
