import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { Context } from '../context/globalContext';
import { HomeTabs } from './BottomTab';
import QR_codeScreen from '../screens/QR_codeScreen';
import QuestionForm from '../screens/TestQuest';
import InfoScreen from '../screens/CalScreen';
import QuestScreen from '../screens/QuestScreen';



const Stack = createNativeStackNavigator();



const Navigation = (props) => {

  const globalContext=useContext(Context)
  const { isLoggedIn, userObj} = globalContext

  return (
    <NavigationContainer >
        <Stack.Navigator >
          <Stack.Screen name="Home" component={HomeTabs}  options={{headerShown: false}}/>
          {/* <Stack.Screen name="Home" component={HomeTabs} options={{headerShown: false}}/>  */}
          {/* {(!isLoggedIn || !userObj)?
            <>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
            </>  
            :
            <Stack.Screen name="Home" component={HomeTabs} /> 
          } */}
          
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;

const styles = StyleSheet.create({})