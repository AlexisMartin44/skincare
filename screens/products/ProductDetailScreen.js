import React from "react";
import { View, Image, Button, StyleSheet, ScrollView, Text } from 'react-native';

import Colors from "../../constants/Colors";

const ProductDetailScreen = props => {
    const item = props.route.params['item'];
    return(
        <ScrollView style={{height: "100%"}}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: item["heroImage"]}} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Marque : {item.brandName}</Text>
              <Text style={[styles.text, {fontFamily: "koho-bold"}]}>{item.displayName}</Text>
              <Text style={styles.text}>Note : {parseFloat(item.rating).toFixed(1)}⭐</Text>
              <Text style={styles.text}>Vues : {item.reviews}</Text>
              <Text style={styles.text}>{item["currentSku"].listPrice}</Text>
            </View>
            <View style={styles.actions}>
                <Button color={Colors.primary} title='Ajouter au panier' onPress={() => {}} />
            </View>
        </ScrollView>
    );
};

ProductDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('productTitle')
  };
};

const styles = StyleSheet.create({
    image: {
        width: "50%",
        height: "100%",
        resizeMode: "contain",
      },
      actions: {
        marginVertical: 10,
        alignItems: 'center',
        fontFamily: 'koho-bold',
      },
      text: {
        fontSize: 15,
        color: '#888',
        textAlign: 'center',
        fontFamily:"koho"
      },
      description: {
        fontFamily: 'koho',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20
      },
      imageContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 150,
        backgroundColor: "white"
      },
      textContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 200,
      }
});

export default ProductDetailScreen;