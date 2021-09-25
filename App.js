import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button, TouchableOpacity, Alert, SafeAreaView } from 'react-native';


export default function App() {
  const [shouldShow, setShouldShow] = useState(true);

  const viewImage = (props) => {
    setShouldShow(false),

      Alert.alert(
        "Open Image in AR",
        "",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );

  }

  return (

    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>


        {shouldShow ? (
          <><TouchableOpacity onPress={viewImage}>

            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aACt-5nKgxag0Joe54qjDgPeaqsnHhirHDl8VW4LCaBMnxDIFtGe1rVW2HbkL9Je77uQ60gDe9fBpbuWIpW9PZqDGrg_68mtpdoVZw=s0',
              }}
              style={{ flex: 1, height: 300, width: 300, marginBottom: 10, marginTop: 10 }}
              resizeMode='contain' />



          </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={{
                  uri: 'https://lh3.googleusercontent.com/aACt-5nKgxag0Joe54qjDgPeaqsnHhirHDl8VW4LCaBMnxDIFtGe1rVW2HbkL9Je77uQ60gDe9fBpbuWIpW9PZqDGrg_68mtpdoVZw=s0',
                }}
                style={{ flex: 1, height: 300, width: 300, marginBottom: 10, marginTop: 10 }}
                resizeMode='contain' />
            </TouchableOpacity><TouchableOpacity>
              <Image
                source={{
                  uri: 'https://lh3.googleusercontent.com/aACt-5nKgxag0Joe54qjDgPeaqsnHhirHDl8VW4LCaBMnxDIFtGe1rVW2HbkL9Je77uQ60gDe9fBpbuWIpW9PZqDGrg_68mtpdoVZw=s0',
                }}
                style={{ flex: 1, height: 300, width: 300, marginBottom: 10, marginTop: 10 }}
                resizeMode='contain' />
            </TouchableOpacity></>

        ) :

          <View style={styles.container}>
            <Button
              onPress={() => {
                setShouldShow(true);
              }}
              title={"Back"}
              color='#007AFF' />
          </View>

        }


      </ScrollView>
    </SafeAreaView>



  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  scrollView: {
    marginHorizontal: 40,
  },

  item: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: 'blue',
    position: 'relative',
    margin: 10
  },

  image: {
    flex: 1
  }


});


// Try 1

// const Example = () => {
//   const [shouldShow, setShouldShow] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [flexDirection, setflexDirection] = useState("column");

//   {
//     shouldShow ? (
//       <><><View style={styles.inputView}>
//         <TextInput
//           style={{ height: 40 }}
//           placeholder="Email"
//           onChangeText={email => setEmail(email)}
//           defaultValue={email} />
//       </View><View style={styles.inputView}>
//           <TextInput
//             style={{ height: 40 }}
//             placeholder="Password"
//             onChangeText={password => setPassword(password)}
//             defaultValue={password}
//             secureTextEntry={true} />
//         </View></>

//         <Button
//           onPress={() => {
//             setShouldShow(false)
//           }}
//           title={"Confirm"}
//           color='#007AFF' /></>

//     ) :

//       <><Image
//         source={{
//           uri: 'https://lh3.googleusercontent.com/aACt-5nKgxag0Joe54qjDgPeaqsnHhirHDl8VW4LCaBMnxDIFtGe1rVW2HbkL9Je77uQ60gDe9fBpbuWIpW9PZqDGrg_68mtpdoVZw=s0',
//         }}
//         style={{ width: 800, height: 1000 }} />

//         <Button
//           onPress={() => {
//             setShouldShow(true);
//           }}
//           title={"Back"}
//           color='#007AFF' /></>
//   }
// }