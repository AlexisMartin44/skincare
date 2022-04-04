import React, {useState, useEffect} from "react";
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { useSelector } from "react-redux";
import Colors from '../../constants/Colors';
import ProductItem from "../../components/shop/ProductItem";
import {API_KEY_PRODUITS} from '@env';


const ProductPage = props => {
    // Get all products
    //const products = useSelector(state => state.products.allProducts);

    const [products, setProducts] = useState([]);
    console.log(API_KEY_PRODUITS);

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
        <FlatList 
            data={products} 
            keyExtractor={item => item.productId} 
            renderItem={itemData => ( 
                <ProductItem 
                    image={itemData.item.heroImage}
                    title={itemData.item.displayName} 
                    price={20} 
                    onViewDetail={() => {
                        props.navigation.navigate('ProductDetail', {item: itemData.item});
                    }} 
                    onAddToCart={() => {}} 
                />
            )}
        />
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
});

export default ProductPage;