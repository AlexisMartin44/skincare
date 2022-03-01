import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from "../../constants/Colors";

const PhotoInfo = props => {
    return (
        <View style={styles.data}>
            <View style={styles.imageContainer}>
                <Image style={{ width: 90, height: 90}} source={props.image}/>
            </View>
            <View style={styles.details}>
                <Text style={styles.name}>{props.name} {props.firstName}</Text>
                <Text style={styles.level}>{props.level}</Text>
            </View>
            <View style={styles.details}>
                <TouchableOpacity onPress={() => alert('Button clicked')} style={styles.appButtonContainer}>
                    <Text style={styles.button}>Change profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    data : {
        flex: 1,
        justifyContent: "space-between",
        padding: 16,
        shadowColor: "black",
        shadowOffset: {width : 0, height : 2},
        shadowOpacity: 0.26,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        width: 350,
        height: 120,
        margin: 35,
        overflow: 'hidden'
    },
    image: {
         width: 100,
         height: 100 
    },
    imageContainer: {
        width: "100%",
        height: "10%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'visible'
    },
    name: {
        fontFamily: 'koho',
        fontSize: 18,
        marginBottom: 4,
        textAlign : 'right',
        textTransform: 'uppercase',
    },
    level: {
        fontFamily: 'koho',
        fontSize: 14,
        color: '#888',
        textAlign : 'right',
    },
    button: {
        textAlign : 'right',
        textDecorationLine: 'underline',
    }
});

export default PhotoInfo;