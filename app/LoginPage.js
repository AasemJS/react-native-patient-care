import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput, Button, TouchableOpacity} from 'react-native';

export default function LoginPage({navigation})
{
    return (
        <View style={styles.container}>
            <View style={styles.darkBackground}>
                <Text style={styles.title}>Patient Clinical Data Management </Text>
            </View>
            <View style={styles.lightBackground}>
                <View style={styles.body}>
                    <Text style={styles.label}>Username: </Text>
                    <TextInput style={styles.input}/>
                </View>
                <View style={styles.body}>
                    <Text style={styles.label}>Password: </Text>
                    <TextInput style={styles.input}/>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('HomePage')}>
                        <Text style={styles.buttonText}>Log in</Text>         
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    body: {
        marginTop: 10,
        flexDirection: 'row',
    },
    title: {  
        fontSize: 24,
        color: 'white',
        margin:25,
        fontWeight: "bold",
    },
    darkBackground: {
        backgroundColor: '#2596be',
    },
    lightBackground: {
        backgroundColor: '#abdbe3',
        alignItems: 'center',
        borderRadius: 20,
        margin: 30,
        padding: 20,
    },
    link: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 16,
        color: 'blue',
    },
    label: {
        fontSize: 15,
        margin: 6,
    },
    input: {
        height: 40,
        width: 220,
        margin: 10,
        backgroundColor: 'white',
        fontSize: 18,
        padding: 10,
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#2596be',
        width: 220,
        height: 40,
        marginTop: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        padding: 9,
    },
});