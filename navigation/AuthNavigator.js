import { createStackNavigator } from "@react-navigation/stack";

import AuthScreen from "../screens/profile/AuthScreen";
import Login from "../screens/profile/LoginScreen";

const AuthStack = createStackNavigator();

const AuthNavigator = props => {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="AuthScreen" 
                component={AuthScreen} 
                options={{ headerShown: false}}
            />
            <AuthStack.Screen name='Login' component={Login} options={{ headerShown: false}} />
        </AuthStack.Navigator>
    );
}

export default AuthNavigator;