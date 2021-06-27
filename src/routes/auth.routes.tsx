import React from "react";
import {createStackNavigator} from '@react-navigation/stack' 
import SingIn from "../screens/sigins";
import Home from "../screens/Home";
import { theme } from "../global/styles/Theme";
import AppointmentDetails from "../screens/AppointmentDetails";
import AppointmentCreate from "../screens/AppointmentCreate";



const {Navigator,Screen} =createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator headerMode="none" 
            screenOptions={{
                    cardStyle:{
                        backgroundColor:theme.colors.secondary100
                    }
            }}
        >
            <Screen name="SingIn" component={SingIn} />
            <Screen name="Home" component={Home} />
            <Screen name="AppointmentDetails" component={AppointmentDetails} />
            <Screen name="AppointmentCreate" component={AppointmentCreate} />
        </Navigator>
    )
}