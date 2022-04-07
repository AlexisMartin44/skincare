import React from "react";
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

import Colors from "../../constants/Colors";

const ProductItem = props => {

    let TouchableCmp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.product}>
            <View style={styles.touchable}>
                <TouchableCmp style={{height: "100%", width: "100%", justifyContent: "space-evenly"}} onPress={props.onViewDetail} useForeground>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{uri: props.image}}/>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.title}>{props.title}</Text>
                            <Text style={styles.price}>{props.price}</Text>
                        </View>
                        <View style={styles.actions}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={{fontSize: 8, color: "white", fontFamily: "koho-bold", textAlign: "center"}}>Détails</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={{fontSize: 8, color: "white", fontFamily: "koho-bold", textAlign: "center"}}>Panier</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableCmp>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    product : {
        display: "flex",
        shadowColor: "black",
        shadowOffset: {width : 0, height : 2},
        shadowOpacity: 0.26,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 150,
        marginTop: 20,
        marginLeft: 20,
        overflow: 'hidden',
        width: "42%",
        padding: 0
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    imageContainer: {
        width: "100%",
        height: "40%",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        fontFamily: 'koho',
        fontSize: 10,
        marginBottom: 4,
        textAlign: "center"
    },
    price: {
        fontFamily: 'koho',
        fontSize: 8,
        color: '#888',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 20,
        width: "100%"
    },
    details: {
        alignItems: 'center',
        padding: 10,
    }, 
    touchable : {
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: "column",
        height: "100%"
    },
    button: {
        width: "45%",
        height: "100%",
        backgroundColor: Colors.primary,
        borderRadius: 10
    }
});

export default ProductItem;