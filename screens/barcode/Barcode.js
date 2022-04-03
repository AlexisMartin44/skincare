import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, ScrollView, KeyboardAvoidingView,Platform,Image} from 'react-native';
import { Camera } from "expo-camera"; //expo install expo-camera
import { Button } from "react-native-paper"; //npm install react-native-paper
import CameraModule from '../../components/UI/Camera';
import Colors from '../../constants/Colors';
import PinkRectangle from '../../components/UI/PinkRectangle'

const Barcode = props => {
    //photo
    const [image, setImage] = useState(null);
    const [camera, setShowCamera] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);
      useEffect(() => {
          (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
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
            <View style={styles.container}>
                <Text style={styles.title}>Scan Bar Code</Text>
                <View style={styles.subcontainer}>
                    <View
                        style={{
                        backgroundColor: "#eeee",
                        width: 220,
                        height: 220,
                        borderRadius: 10,
                        marginBottom: 2,
                        }}
                    >
                    <Image
                    source={{ uri: image }}
                    style={{ width: 220, height: 220, borderRadius: 10 }}
                    />
                </View>
            </View>
            <Button
                style={{ width: "40%", marginTop: 16 }}
                icon="camera"
                color = "#eeee"
                mode="contained"
                onPress={() => {
                setShowCamera(true);
                }}
            >Camera</Button>
            {camera && (
                <CameraModule
                showModal={camera}
                setModalVisible={() => setShowCamera(false)}
                setImage={(result) => setImage(result.uri)}
                />
            )}
            <PinkRectangle title='Details product'/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom : 200,
    },
    subcontainer: {
        paddingTop: 40
    },
    title: {
        fontSize: 25,
        fontFamily: 'koho-bold',
        color: Colors.primary,
        marginTop : 20,
        marginBottom: -10, 
    },
    button: {
        paddingTop: 40 
    }
});

export default Barcode;