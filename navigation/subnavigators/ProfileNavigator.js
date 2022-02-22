import { createStackNavigator } from "@react-navigation/stack";

import ProfilePage from "../../screens/profile/ProfilePage";

const ProfileStack = createStackNavigator();

const ProfileStack = () => {
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="MyRoutine" component={ProfilePage} />
            <ProfileStack.Screen name="SkinEvolution" component={ProfilePage} />
            <ProfileStack.Screen name="Prescription" component={ProfilePage} />
            <ProfileStack.Screen name="MedicalFile" component={ProfilePage} />
            <ProfileStack.Screen name="ProductRecommendation" component={ProfilePage} />
            <ProfileStack.Screen name="EmergencyPhoto" component={ProfilePage} />
        </ProfileStack.Navigator>
    );
};

export default ProductNavigator; 