import React from "react";
import { FlatList, Text } from 'react-native';
import { useSelector } from "react-redux";

const HomePage = props => {
    // Get all products
    const products = useSelector(state => state.products.allProducts);

    return (
        <FlatList 
            data={products} 
            keyExtractor={item => item.id} 
            renderItem={itemData => <Text>{itemData.item.title}</Text>} 
        />
    );
}

HomePage.navigationOptions = {
    headerTitle: 'Home'
};

export default HomePage;