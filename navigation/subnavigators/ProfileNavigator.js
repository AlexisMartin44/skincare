import { createStackNavigator } from "@react-navigation/stack";

import ProfilePage from "../../screens/profile/ProfilePage";
import Home from "../../screens/home/Home";
import SkinEvolutionScreen from "../../screens/profile/SkinEvolutionScreen";

const ProfileStack = createStackNavigator();

const ProfileNavigator = () => {
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="ProfilePage" component={ProfilePage} />
            <ProfileStack.Screen name="MyRoutine" component={Home} />
            <ProfileStack.Screen name="MySkinEvolution" component={SkinEvolutionScreen} />
        </ProfileStack.Navigator>
    );
};

export default ProfileNavigator; 