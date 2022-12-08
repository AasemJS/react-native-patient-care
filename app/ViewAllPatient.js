import React from 'react';
import { StyleSheet, Text,ScrollView, SafeAreaView, StatusBar, View,TextInput,TouchableOpacity} from 'react-native';

export default function ViewAllPatients({navigation})
{
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.darkBackground}>
                <Text style={styles.logo}>Patient Clinical List</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.labels}>Patient Name </Text>
                <Text style={styles.labels}>Patient Age </Text>
                <Text style={styles.labels}>Department</Text>
                <Text style={styles.labels}>Doctor</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("AddTestDetails")}>
            
                    <View style={styles.lightBackground}>
                        <View style={styles.body}>
                            <Text style={styles.item}> {item.patient_name}</Text>
                            <Text style={styles.item}> {item.age}</Text>
                            <Text style={styles.item}> {item.department}</Text>
                            <Text style={styles.item}> {item.doctor}</Text>
                        </View>
                    </View>
                    </TouchableWithoutFeedback>}
                        keyExtractor={(item) => item._id}
                        ItemSeparatorComponent={ItemSeparator}
                        ListEmptyComponent={ListEmpty}
            />
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('HomePage')}>
                        <Text style={styles.buttonText}>Return Home</Text>         
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
                );
            }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        marginHorizontal: 10,
    },
    body: {
        marginTop: 10,
        flexDirection: 'row',
    },
    logo: {  
        fontSize: 32,
        color: 'white',
        marginTop:60,
        marginBottom:20,
        marginLeft: 20,
        fontWeight: "bold",
        textAlign: 'center',
    },
    labels: {
        fontSize: 20,
        width: 88,
        margin: 10,
        color: 'white',
        borderRadius: 10,
        backgroundColor: '#2596be',
        textAlign: 'center',
    },
    label: {
        fontSize: 14,
        width: 88,
        margin: 10,
        paddingBottom: 9,
        paddingTop: 9,
        textAlign: 'center',
        backgroundColor: '#abdbe3',
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
    darkBackground: {
        backgroundColor: '#2596be',
    },
    lightBackground: {
        alignItems: 'center',
        borderRadius: 20,
        margin: 30,
        padding: 20,
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
        fontSize: 16,
        textAlign: 'center',
        padding: 9,
    },
});
 