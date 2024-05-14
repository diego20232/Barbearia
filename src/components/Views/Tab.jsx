import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../Home";


const Tab = createMaterialTopTabNavigator();

export default props => {

    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={Home}/>
        </Tab.Navigator>
    )
}