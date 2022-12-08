import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomePage ({navigation})
{
    return (
        <View style={styles.container}>
            <View style={styles.darkBackground}>
                <Text  style={styles.title}>Patient Care Info</Text>
            </View>

            <View style={styles.lightBackground}>
                <View style={styles.button}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('AddPatient')}> 
                        <Text style={styles.buttonText}>Add New Patient</Text>
                    </TouchableOpacity>
                </View>

            <View style={styles.button}>
                <TouchableOpacity
                onPress={() => navigation.navigate('ViewPatient')}> 
                    <Text style={styles.buttonText}>View Patient List</Text>
                </TouchableOpacity> 
            </View>

            <View style={styles.button}>
                <TouchableOpacity
                onPress={() => navigation.navigate('AddTestRecord')}> 
                    <Text style={styles.buttonText}>Add Patient's Record</Text>
                </TouchableOpacity>                    
            </View>

            <View style={styles.button}>
                <TouchableOpacity
                onPress={() => navigation.navigate('ViewTestRecord')}> 
                    <Text style={styles.buttonText}>View Patient's Record</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.button}>
                <TouchableOpacity
                onPress={() => navigation.navigate('CriticalPatients')}> 
                    <Text style={styles.buttonText}>Critical Patients</Text>
                </TouchableOpacity>          
            </View>

            <View style={styles.buttonLogout}>
                <TouchableOpacity
                onPress={() => navigation.navigate('LoginPage')}> 
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>

);
}
   
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        color: 'white',
        margin:25,
        marginTop: 40,
        fontWeight: "bold",
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        padding: 9,
    },
    button: {
        backgroundColor: '#2596be',
        width: 220,
        height: 40,
        marginTop: 20,
        borderRadius: 10,
    },
    buttonLogout: {
        backgroundColor: 'red',
        width: 220,
        height: 40,
        marginTop: 20,
        borderRadius: 10,
    },
    darkBackground: {
        backgroundColor: '#2596be',
    },
    lightBackground: {
        backgroundColor: '#abdbe3',
        alignItems: 'center',
        borderRadius: 20,
        margin: 30,
        paddingTop: 10,
        paddingBottom: 30,
    },
});
