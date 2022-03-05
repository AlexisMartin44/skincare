import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, ScrollView,Image} from 'react-native';
import { Button } from "react-native-paper"; //npm install react-native-paper

import CameraModule from '../../components/UI/Camera'
import WhiteRectangle from '../../components/UI/WhiteRectangle'
import Colors from '../../constants/Colors';

const Barcode = props => {

    return(
        <>
        <ScrollView style={{flexGrow: 1, paddingTop: 50, backgroundColor: "white"}}>
        <View style={styles.data_profile}>
            <Text style={styles.title}>Contactez Nous</Text>
            <View style={styles.actions}>
                <Image style={{ width: 90, height: 90}} source={require('../../assets/icons/insta.png')}/>
                <Text style={styles.subtitle}>officiel_snow_white</Text>
            </View>
            <View style={styles.actions2}>
                <Image style={{ width: 120, height: 90}} source={require('../../assets/icons/logo.png')}/>
                <Text style={styles.subtitle2}>  https://armelleseg.wixsite.com/website-1</Text>
            </View>
        </View>
         </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    actions: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 100,
        paddingVertical: 100,
    },
    actions2: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 90,
        paddingVertical: 0,
    },
    data_profile: {
        flex : 1,
        justifyContent: 'center',
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
        fontSize: 5,
        fontFamily: 'koho-bold',
        marginTop : 20,
        marginBottom: -10, 
        justifyContent: "center",
        color: Colors.darkBlue,
        fontSize: 24,
        fontFamily: 'koho-light',
        marginBottom: 10
    },
    subtitle2: {
        fontSize: 5,
        fontFamily: 'koho-bold',
        marginTop : 20,
        marginBottom: -10, 
        justifyContent: "center",
        color: Colors.darkBlue,
        fontSize: 24,
        fontFamily: 'koho-light',
        marginBottom: -20
    },
});

export default Barcode;