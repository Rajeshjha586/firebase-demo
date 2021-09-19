// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
import Register from "./Register/Register";
import Login from "./Login/Login";
import * as React from 'react';
import * as firebase from "firebase"
import Password from "./Password/Password"
import DashScreen from "./Dashboard/Screen"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Icon from '@expo/vector-icons/FontAwesome5';
import { TouchableOpacity } from "react-native";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
const Stack = createStackNavigator();

export default function Home() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title: 'Login',
                        headerTintColor: 'red',
                        headerStyle: { backgroundColor: 'aqua', height: 55 },
                        headerTitleStyle: { color: 'darkorange', textAlign: 'center', fontWeight: 'bold', fontSize: 30 ,fontStyle:"italic"}
                    }} />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        title: 'Register',
                        headerStyle: { backgroundColor: 'aqua', height: 55 },
                        headerTintColor: 'red',
                        headerTitleStyle: { color: 'darkorange', textAlign: 'center', fontWeight: 'bold', fontSize: 30,fontStyle:"italic" }
                   }} />
                <Stack.Screen
                    name="Dashboard"
                    component={DashScreen}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name="Password"
                    component={Password}
                    options={{
                        title: 'Password',
                        headerTintColor: 'red',
                        headerStyle: { backgroundColor: 'aqua', height: 55 },
                        headerTitleStyle: { color: 'darkorange', textAlign: 'center', fontWeight: 'bold', fontSize: 30,fontStyle:"italic" }
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

