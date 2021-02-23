import React from 'react'

import Register from '../pages/Register';
import Home from '../pages/Home'
import StudentInfo from '../pages/StudentInfo'
import StudentList from '../pages/StudentList'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const StackHome = () => {
    return ( 
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {backgroundColor: '#e5e3d1'}
            }}
            initialRouteName ="register">
            <Stack.Screen
                    name="Home"
                    component={Home}
            />
            <Stack.Screen
                    name="Register"
                    component={Register}
            />
        </Stack.Navigator>
    )
}

const StackL = createStackNavigator()

const StackList = () =>{
    return(
        <StackL.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {backgroundColor: '#e5e3d1'}
            }}
            initialRouteName ="StudentList">
                <StackL.Screen
                        name="StudentInfo"
                        component={StudentInfo}
                />
                <StackL.Screen
                        name="StudentList"
                        component={StudentList}
                />
        </StackL.Navigator>
    )
}
export default { StackHome, StackList}