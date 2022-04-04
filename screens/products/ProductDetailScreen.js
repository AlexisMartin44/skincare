import React from "react";
import { View, Image, Button, StyleSheet, ScrollView, Text } from 'react-native';
import { useSelector } from "react-redux";

import Colors from "../../constants/Colors";

const ProductDetailScreen = props => {
    const item = props.route.params['item'];
    console.log(item);
    return(
        <ScrollView>
            <Image style={styles.image} source={{uri: item["heroImage"]}} />
            <View style={styles.actions}>
                <Button color={Colors.primary} title='Add to Cart' onPress={() => {}} />
            </View>
            <Text style={styles.price}>${20}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
      },
      actions: {
        marginVertical: 10,
        alignItems: 'center',
        fontFamily: 'koho-bold',
      },
      price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20
      },
      description: {
        fontFamily: 'koho',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20
      }
});

export default ProductDetailScreen;