
import React from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicatorComponent } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useState, useEffect } from "react";

export default CriticalPatients = ({ navigation }) => {
    // var date = new Date().getDate();
    const ItemSeparator = () => {
        return <View style={{
            height: 1,
            backgroundColor: "#d68227",
            marginHorizontal: 10
        }}
        />;
    };

    const ListEmpty = () => {
        return (
            <View style={{ alignItems: "center" }}>
                <Text style={styles.item}>Error, no critical patients found!</Text>
            </View>
        );
    };

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const resp = await fetch("http://192.168.0.159:19000/patients");
        const data = await resp.json();
        const newData = data.filter(function (item) {
            // Check the filter condition
            if (item.critical_condition == true) {
                return item
            }
        });



        setData(newData);
    };

    useEffect(() => {
        fetchData();
        const willFocusSubscription = navigation.addListener('focus', () => {
            fetchData();
        });
        return willFocusSubscription;
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.darkBackground}>
                <Text style={styles.logo}>Patient Clinical List</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.labels}>Name:</Text>
                <Text style={styles.labels}>Age:</Text>
                <Text style={styles.labels}>Dept:</Text>


            </View>
            <FlatList
                data={data}
                renderItem={({ item }) =>


                    <View style={styles.lightBackground}>


                        <View style={styles.core}>
                            <Text style={styles.item}> {item.patient_name}</Text>
                            <Text style={styles.item}> {item.age}</Text>
                            <Text style={styles.item}> {item.department}</Text>


                        </View>

                    </View>}

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
        marginTop: 2,
        flexDirection: 'row',
        margin: 5,
        paddingLeft: 40
    },
    core: {
        marginTop: 2,
        flexDirection: 'row',
        margin: 5,
    },
    logo: {
        fontSize: 24,
        color: 'white',
        margin: 25,
        fontWeight: "bold",
        textAlign: 'center',
    },
    labels: {
        fontSize: 18,
        width: 100,
        margin: 5,
        color: 'white',
        borderRadius: 10,
        backgroundColor: '#2596be',
        textAlign: 'center',
        padding: 10,
    },
    item: {
        fontSize: 16,
        width: 188,
        margin: 10,
        textAlign: 'center',
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
        padding: 10,
    },
    button: {
        backgroundColor: '#2596be',
        width: 150,
        height: 40,
        marginTop: 20,
        borderRadius: 10,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 19,
        textAlign: 'center',
        padding: 9,
    },
});