import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native-paper';
import Login from './components/Login';
import Home from './components/Home';
import Details from './components/Details';

const Drawer = createDrawerNavigator();


export default props => {

    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName='details'>
                    <Drawer.Screen name='login' component={Login} options={{headerTitle:  '', headerTintColor: "white",  headerStyle: {
                        backgroundColor: '#6959CD'
                    } }}/>
                    <Drawer.Screen name='home' component={Home} options={{headerTitle:  '', headerTintColor: "white",  headerStyle: {
                        backgroundColor: '#6959CD'
                    } }}/>
                    <Drawer.Screen name='details' component={Details} options={{headerTitle:  '', headerTintColor: "white",  headerStyle: {
                        backgroundColor: '#6959CD'
                    }}}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}