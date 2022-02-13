import { createStackNavigator } from "@react-navigation/stack";

import ProductPage from "../../screens/products/ProductPage";
import ProductDetailScreen from "../../screens/products/ProductDetailScreen";

const ProductStack = createStackNavigator();

const ProductNavigator = () => {
    return(
        <ProductStack.Navigator>
            <ProductStack.Screen name="ProductPage" component={ProductPage} />
            <ProductStack.Screen name="ProductDetail" component={ProductDetailScreen} />
        </ProductStack.Navigator>
    );
};

export default ProductNavigator; 