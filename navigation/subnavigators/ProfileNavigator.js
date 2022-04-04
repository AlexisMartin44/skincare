import { createStackNavigator } from "@react-navigation/stack";

import ProfilePage from "../../screens/profile/ProfilePage";
import Home from "../../screens/home/Home"
import SkinEvolution from "../../screens/profile/SkinEvolution"
import CaptorPage from "../../screens/profile/CaptorPage"

const ProfileStack = createStackNavigator();

const ProfileNavigator = () => {
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="ProfilePage" component={ProfilePage} options={{ headerShown: false}} />
            <ProfileStack.Screen name="MyRoutine" component={Home} options={{ headerShown: false}} />
            <ProfileStack.Screen name="SkinEvolution" component={SkinEvolution} options={{ headerShown: false}} />
            <ProfileStack.Screen name="CaptorPage" component={CaptorPage} options={{ headerShown: false}} />
        </ProfileStack.Navigator>
    );
};

export default ProfileNavigator; 