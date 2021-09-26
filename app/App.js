import React, { Component, useState, useRef } from 'react';
import { StyleSheet, View, Alert, FlatList, Text, Image, SafeAreaView, TouchableOpacity, Modal, Pressable } from 'react-native';
// import { PinchGestureHandler } from 'react-native-gesture-handler'
// import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
// import { render } from 'react-dom';


const DATA = [
  {
    id: '1',
    imgUrl:
      'https://s.gravatar.com/avatar/b4185aac47f6262b40dc8f11535a32c0?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjs.png',
    name: 'Ankur',
    price: '2.00',
  },
  {
    id: '2',
    imgUrl:
      'https://pbs.twimg.com/profile_images/1359263677661261827/CIb2NnAN_400x400.jpg',
    name: 'Usef',
    price: '1.00',
  },
  {
    id: '3',
    imgUrl:
      'https://oto.wustl.edu/wp-content/uploads/2020/05/Youssef-Stephanie-280x386.jpg',
    name: 'Dit',
    price: '1000000.00',
  },
];

export default function App() {
  const [elementIndex, setElementIndex] = useState(0)
  const [modalVisible, setModalVisible] = useState(false);

  const pressHandler = (index) => {
    setModalVisible(!modalVisible);
    setElementIndex(index);

    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            source={{ uri: DATA[elementIndex].imgUrl }}
            style={{ height: 300, width: 300 }}
            resizeMode="contain"
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  }





  return (
    <SafeAreaView style={styles.container}>

      <FlatList

        data={DATA}
        inverted
        keyExtriactor={(time, index) => index.toString()}
        renderItem={({ item, index }) => {


          return (
            <View>

              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Image
                      source={{ uri: DATA[elementIndex].imgUrl }}
                      style={{ height: 300, width: 300 }}
                      resizeMode="contain"
                    />
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>

              <View style={styles.container}>
                <View style={{ margin: 10 }}>
                  {item.imgUrl && (
                    <TouchableOpacity onPress={() => pressHandler(index)}>

                      <Image
                        source={{ uri: item.imgUrl }}
                        style={{ height: 300, width: 300 }}
                        resizeMode="contain"

                      />
                    </TouchableOpacity>
                  )}
                </View>
                <View style={{ margin: 5 }}>
                  <Text style={styles.baseText}>
                    <Text style={styles.titleText}>
                      {item.name} {"\n"}
                    </Text>
                    {item.price}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}

      />

    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },

  baseText: {
    fontFamily: "Cochin",
    textAlign: "center"
  },

  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
});
