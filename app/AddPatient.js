import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView,Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

let AddPatient = null;

export default AddPatient = ({ navigation }) => {

    const [emaildId, onChangeText1] = React.useState(null);
    const [password, onChangeText2] = React.useState(null);

    const [patient_name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [age, setAge] = React.useState('');
    const [contact_no, setContact] = React.useState('');
    const [department, setDepartment] = React.useState('');
    const [doctor, setDoctor] = React.useState('');

    const getDataUsingPost = () => {
    console.log("post method")

    var dataToSend = {
      "patient_name": patient_name,
      "address": address,
      "age": age,
      "contact_no": contact_no,
      "department": department,
      "doctor": doctor
    };

    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://192.168.0.159:19000/patients', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {

        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
    .then((response) => response.json())

    .then((responseJson) => {

        console.log(responseJson);
        })

    .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
        });
    };
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.darkBackground}>
            <Text style={styles.logo}>Patient Clinical Information</Text>
        </View>

        <View style={styles.lightBackground}>
          <View style={styles.body}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setName(text)}
                value={patient_name}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Address:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setAddress(text)}
                value={address}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Age:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setAge(text)}
        value={age}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Contact:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setContact(text)}
                value={contact_no}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Department:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setDepartment(text)}
                value={department}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Doctor:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setDoctor(text)}
                value={doctor}
                />
          </View>

        
        
          <View style={styles.button}>
                <TouchableOpacity style={styles.button} onPress={() => { getDataUsingPost(), navigation.navigate("ViewPatient") }}>
               <Text style={styles.btnText}>Save</Text>
             </TouchableOpacity>
        </View>

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
    fontSize: 24,
    color: 'white',
    margin:25,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    width: 100,
    margin: 12,
  },
  input: {
    height: 40,
    width: 180,
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
    backgroundColor: '#abdbe3',
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
  btnText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 9,
  },
});
