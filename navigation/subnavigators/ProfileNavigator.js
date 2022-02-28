import { createStackNavigator } from "@react-navigation/stack";

import ProfilePage from "../../screens/profile/ProfilePage";
import Home from "../../screens/home/Home"

const ProfileStack = createStackNavigator();

const ProfileStack = () => {
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="ProfilePage" component={ProfilePage} />
            <ProfileStack.Screen name="MyRoutine" component={Home} />
        </ProfileStack.Navigator>
    );
};

export default ProductNavigator; 