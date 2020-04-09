import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from "./pages/Main";
import Profile from "./pages/Profile";

const Routes = createAppContainer(
    createStackNavigator ({
        Main: {
            screen: Main,
            navigationOptions: {
                title: "DevRadar",  // Troca titulo da tela da aplicacao
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: "Perfil no Github"
            }
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: "#FFF",
            headerBackTitle: null,
            headerStyle: {
                backgroundColor: "#7D40E7", 
            }
        }
    })
);

export default Routes;