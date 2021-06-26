import React from "react";
import {createStackNavigator} from '@react-navigation/stack' 
import SingIn from "../screens/sigins";
import Home from "../screens/Home";



const {Navigator,Screen} =createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator headerMode="none" 
            screenOptions={{
                    cardStyle:{
                        backgroundColor:'transparent'
                    }
            }}
        >
            <Screen name="SingIn" component={SingIn} />
            <Screen name="Home" component={Home} />
        </Navigator>
    )
}