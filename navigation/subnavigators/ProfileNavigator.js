import { createStackNavigator } from "@react-navigation/stack";

import ProfilePage from "../../screens/products/ProfilePage";
//for now the stack goes to Product Page
import ProductPage from "../../screens/products/ProductPage";

const ProfileStack = createStackNavigator();

const ProfileStack = () => {
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="MyRoutine" component={ProductPage} />
            <ProfileStack.Screen name="SkinEvolution" component={ProductPage} />
            <ProfileStack.Screen name="Prescription" component={ProductPage} />
            <ProfileStack.Screen name="MedicalFile" component={ProductPage} />
            <ProfileStack.Screen name="ProductRecommendation" component={ProductPage} />
            <ProfileStack.Screen name="EmergencyPhoto" component={ProductPage} />
        </ProfileStack.Navigator>
    );
};

export default ProductNavigator; 