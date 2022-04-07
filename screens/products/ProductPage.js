import React, {useState, useEffect} from "react";
import { FlatList, Text, View, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from "react-redux";
import Colors from '../../constants/Colors';
import ProductItem from "../../components/shop/ProductItem";
import {API_KEY_PRODUITS} from '@env';


const ProductPage = props => {
    // Get all products
    //const products = useSelector(state => state.products.allProducts);

    const [products, setProducts] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
            'X-RapidAPI-Key': `${API_KEY_PRODUITS}`
        }
    };
    
    const fetchProducts = async () => {
        await fetch('https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=60&currentPage=1', options)
        .then(response => response.json())
        .then(response => {
            setProducts(response["products"]);
        })
        .catch(err => console.error(err));
    } 

    useEffect(() => {
        fetchProducts();
    }, []); 

    return (
        <ScrollView>
            <View style={styles.productsContainer}>
                {
                    products.map((product, index, products) => {
                        return(<ProductItem 
                            key={index}
                            image={product.heroImage}
                            title={product.displayName} 
                            price={product["currentSku"].listPrice} 
                            onViewDetail={() => {
                                props.navigation.navigate('ProductDetail', {item: product, productTitle: product.displayName});
                            }} 
                            onAddToCart={() => {}} 
                        />);
                    })
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'white'
    },
    title: {
        marginTop: 50,
        fontSize: 25,
        fontFamily: 'koho-bold',
        color: Colors.primary,
        marginBottom: 30, 
    },
    productsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    }
});

export default ProductPage;