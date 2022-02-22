import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

import Colors from "../../constants/Colors";

const DataUser = props => {
    return (
        <View style={styles.data}>
            <View style={styles.imageContainer}>
                <Image style={{ width: 40, height: 40 }} source={props.image}/>
            </View>
            <View style={styles.details}>
                <Text style={styles.title}>{props.firstName}</Text>
                <Text style={styles.price}>{props.name}</Text>
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
        height: 100,
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
    firstName: {
        fontFamily: 'koho',
        fontSize: 18,
        marginBottom: 4
    },
    name: {
        fontFamily: 'koho',
        fontSize: 14,
        color: '#888',
    }
});

export default DataUser;