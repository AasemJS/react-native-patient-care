import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
/* import pages */
import HomePage from './app/HomePage';
import LoginPage from './app/LoginPage';
import ViewPatient from './app/ViewPatient';
import AddPatient from './app/AddPatient';
import ViewAllPatient from './app/ViewAllPatient';
import AddTestRecord from './app/AddTestRecord';
import ViewTestRecord from './app/ViewTestRecord';
import CriticalPatients from './app/CriticalPatients';

const MyStack = createNativeStackNavigator();
    export default function App() {
        return (
            <NavigationContainer>
            <MyStack.Navigator>
            <MyStack.Screen name="LoginPage" component={LoginPage} options={{
             headerShown: true
            }}/>
            <MyStack.Screen name="HomePage" component={HomePage} options={{
             headerShown: false
            }}/>
            <MyStack.Screen name="AddPatient" component={AddPatient}/>
            <MyStack.Screen name="ViewPatient" component={ViewPatient}options={{
                headerShown: true

            }}/>
            <MyStack.Screen name="ViewAllPatient" component={ViewAllPatient}options={{
                headerShown: true

            }}/>
            <MyStack.Screen name="AddTestRecord" component={AddTestRecord}options={{
                headerShown: true

            }}/>
            <MyStack.Screen name="ViewTestRecord" component={ViewTestRecord}options={{
                headerShown: true

            }}/>
            <MyStack.Screen name="CriticalPatients" component={CriticalPatients}options={{
                headerShown: true
            }}/>

            </MyStack.Navigator>
        </NavigationContainer>
    );
}
   
