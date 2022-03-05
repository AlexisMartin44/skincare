import React from "react";
import { View, Image, Button, StyleSheet, ScrollView, Text } from 'react-native';
import { useSelector } from "react-redux";

import Colors from "../../constants/Colors";

const ProductDetailScreen = props => {
    const productId = props.route.params['productId'];
    const selectedProduct = useSelector(state => state.products.allProducts.find(prod => prod.id === productId));
    return(
      <ScrollView style={{flexGrow: 1, paddingTop: 10, backgroundColor: "white"}}>
        <View>
            <Image style={styles.image} source={{uri: selectedProduct.imageUrl}} />
            <View style={styles.actions}>
                <Button color={Colors.primary} title='Add to Cart' onPress={() => {}} />
            </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
          </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 400
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