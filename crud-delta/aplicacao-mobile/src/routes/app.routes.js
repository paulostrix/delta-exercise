import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { FontAwesome as Icon } from '@expo/vector-icons'

import Stacks from'../routes/stack.functional.routes'
import Home from '../pages/Home/index'
import SplashScreen from '../pages/SplashScreen'

const Tab = createMaterialBottomTabNavigator()


const AppTabRoutes = () =>{
  const tabBarListeners = ({ navigation, route }) => ({
    tabPress: () => navigation.navigate(route.name),
  });
    return (
        <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Home"
              activeColor="#e5e3d1"
              inactiveColor="#e5e3d1"
              barStyle={{ backgroundColor: '#2374b4' }}> 
              <Tab.Screen
                    name='Home' component={Stacks.StackHome}
                    listeners={tabBarListeners}
                    options={{
                        tabBarIcon: ({ color }) => (
                          <Icon
                            name="home"
                            size={24}
                            color={color}
                          />
                        )
                      }}
                />
                <Tab.Screen
                    name="Student List" component={Stacks.StackList}
                    listeners={tabBarListeners}
                    options={{
                        tabBarIcon: ({ color }) => (
                          <Icon
                            name="list-alt"
                            size={24}
                            color={color}
                          />
                        )
                      }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppTabRoutes