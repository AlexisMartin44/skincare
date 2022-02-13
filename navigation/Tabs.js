import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Home from '../screens/home/Home';
import Profile from '../screens/profile/ProfilePage';
import Message from '../screens/messages/Message';
import Barcode from '../screens/barcode/Barcode';

import ProductNavigator from './subnavigators/ProductNavigator'; 
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => {
    return (<TouchableOpacity 
        onPress={onPress}
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}    
    >  
        <View 
            style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: Colors.primary,
            }}
        >
            {children}
        </View>
    </TouchableOpacity>);
}

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: "#ffffff",
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen name="Barcode" 
                component={Barcode} 
                options={{ 
                    headerShown: false, 
                    tabBarIcon: ({focused}) => {
                        return (<View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image 
                                source={require('../assets/icons/Barcode.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor : focused ? Colors.primary : "#748c94",
                                }}
                            />
                            <Text style={{color: focused ? Colors.primary : "#748c94", fontSize: 12, fontFamily: "koho"}}>BARCODE</Text>
                        </View>)
                    }}} 
            />
            <Tab.Screen name="Profile" 
                component={Profile} 
                options={{ 
                    headerShown: false, 
                    tabBarIcon: ({focused}) => {
                        return (<View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image 
                                source={require('../assets/icons/Profile.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor : focused ? Colors.primary : "#748c94",
                                }}
                            />
                            <Text style={{color: focused ? Colors.primary : "#748c94", fontSize: 12, fontFamily: "koho"}}>PROFILE</Text>
                        </View>)
                    }}} 
            />
            <Tab.Screen name="Home" 
                component={Home} 
                options={{ 
                    headerShown: false, 
                    tabBarIcon: ({focused}) => (
                            <Image 
                                source={require('../assets/icons/Home.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor : "white",
                                }}
                            />), tabBarButton: (props) => (
                                <CustomTabBarButton {...props} />
                            )
                    }}
            />
            <Tab.Screen name="Message" 
                component={Message} 
                options={{ 
                    headerShown: false, 
                    tabBarIcon: ({focused}) => {
                        return (<View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image 
                                source={require('../assets/icons/Message.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor : focused ? Colors.primary : "#748c94",
                                }}
                            />
                            <Text style={{color: focused ? Colors.primary : "#748c94", fontSize: 12, fontFamily: "koho"}}>MESSAGE</Text>
                        </View>)
                    }}} 
            />
            <Tab.Screen name="ProductNavigator" 
                component={ProductNavigator} 
                options={{ 
                    headerShown: false, 
                    tabBarIcon: ({focused}) => {
                        return (<View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image 
                                source={require('../assets/icons/Book.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor : focused ? Colors.primary : "#748c94",
                                }}
                            />
                            <Text style={{color: focused ? Colors.primary : "#748c94", fontSize: 12, fontFamily: "koho"}}>PRODUCTS</Text>
                        </View>)
                    }}} 
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})

export default Tabs;