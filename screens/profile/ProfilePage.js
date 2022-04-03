import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, ScrollView, KeyboardAvoidingView,Platform,Image} from 'react-native';
import { Camera } from "expo-camera"; //expo install expo-camera
import { Button } from "react-native-paper"; //npm install react-native-paper

import BlueRectangle from '../../components/UI/BlueRectangle';
import DataUser from '../../components/profile/DataUser';
import CameraModule from '../../components/UI/Camera'
import Colors from '../../constants/Colors';

const ProfilePage = props => {
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
        <ScrollView style={{flexGrow: 1, paddingTop: 50, backgroundColor: "white"}}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View
              style={{
              backgroundColor: "#eeee",
              width: 120,
              height: 120,
              borderRadius: 100,
              marginBottom: 8,
              }}
          >
              <Image
              source={{ uri: image }}
              style={{ width: 120, height: 120, borderRadius: 100 }}
              />
          </View>
          <Button
              style={{ width: "30%", marginTop: 16 }}
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


            <View style={styles.data_profile}>
                <Text style={styles.title}>Profile</Text>
                <DataUser
                firstName = 'Elise'
                name = 'Malard' 
                image = {require('../../assets/profile/profilePhoto.png')}
                level = 'level'
                />
            </View>
            <View style={styles.container}>
                <BlueRectangle title='My Routine' navigate={() => {props.navigation.navigate('Home')}} />
                <BlueRectangle title='Skin Evolution' navigate={() => {props.navigation.navigate('SkinEvolution')}} />
                <BlueRectangle title='Prescription' />
                <BlueRectangle title='Medical File' />
                <BlueRectangle title='Product Suggestion' />
                <BlueRectangle title='Emergency Photo' />
            </View>


            
         </ScrollView>
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
        marginBottom : 200
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
});

export default ProfilePage;