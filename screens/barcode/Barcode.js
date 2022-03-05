import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, ScrollView, KeyboardAvoidingView,Platform,Image} from 'react-native';
import { Camera } from "expo-camera"; //expo install expo-camera
import { Button } from "react-native-paper"; //npm install react-native-paper

import CameraModule from '../../components/UI/Camera'
import WhiteRectangle from '../../components/UI/WhiteRectangle'
import Colors from '../../constants/Colors';

const Barcode = props => {
    var icon = require('../../assets/profile/profilePhoto.png');

    const [image, setImage] = useState(null);
    const [camera, setShowCamera] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);
      useEffect(() => {
          (async () => {
          const { status } = await Camera.requestPermissionsAsync();
          setHasPermission(status === "granted");
          })();
      }, []);
      if (hasPermission === null) {
          return <View />;
      }
      if (hasPermission === false) {
          return <Text>No access to camera</Text>;
      }

    return(
        <>
        <ScrollView style={{flexGrow: 1, paddingTop: 50, backgroundColor: "white"}}>
        <View style={styles.data_profile}>
            <Text style={styles.title}>Scan ton code Bar</Text>
            <Text style={styles.subtitle}>Retrouve nous en boutique et scan ton produit pour connaitre son prix</Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center",paddingTop: 100 }}>
          <View
              style={{
              backgroundColor: "#eeee",
              width: 200,
              height: 200,
              borderRadius: 100,
              }}
          >
              <Image
              source={{ uri: image }}
              style={{ width: 120, height: 120, borderRadius: 100 }}
              />
          </View>
          <Button
              style={{ width: "30%", marginTop: 16, color : Colors.primary }}
              icon="camera"
              mode="contained"
              onPress={() => {
              setShowCamera(true);
              }}
          >
              Camera
          </Button>
          {camera && (
              <CameraModule
              showModal={camera}
              setModalVisible={() => setShowCamera(false)}
              setImage={(result) => setImage(result.uri)}
              />
          )}
          </View>
         </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    data_profile: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rect: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -100, 
    },
    screen: {
        flex: 1
    },
    title: {
        fontSize: 25,
        fontFamily: 'koho-bold',
        color: Colors.darkBlue,
        marginTop : 20,
        marginBottom: -10, 
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'koho-bold',
        marginTop : 50,
        marginBottom: -10, 
        justifyContent: "center",
        color: Colors.darkBlue,
        fontSize: 24,
        fontFamily: 'koho-light',
        marginBottom: 10
    },
});

export default Barcode;