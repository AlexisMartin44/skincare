import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView, KeyboardAvoidingView,Platform} from 'react-native';

import BlueRectangle from '../../components/UI/BlueRectangle';
import DataUser from '../../components/profile/DataUser';
import Colors from '../../constants/Colors';

const ProfilePage = props => {
    var icon = require('../../assets/profile/profilePhoto.png');
    return(
        <>
        <ScrollView style={{flexGrow: 1, paddingTop: 50, backgroundColor: "white"}}>
            <View style={styles.data_profile}>
                <Text style={styles.title}>Profile</Text>
                <DataUser
                firstName = 'Profile'
                name = 'Ton' 
                image = {require('../../assets/profile/profilePhoto.png')}
                level = 'niveau client 1'
                />
            </View>
            <View style={styles.container}>
                <BlueRectangle title='Mes préferences' 
                navigate={() => {
                    props.navigation.navigate('Home')}}/>
                <BlueRectangle title='Ma liste de souhaits'
                navigate={() => {
                    props.navigation.navigate('ProductPage')}} />
                <BlueRectangle title='Historiques de commandes' />
                <BlueRectangle title='Contactez-nous'
                navigate={() => {
                    props.navigation.navigate('Message')}} />
                <BlueRectangle title='Deconnexion' />
            </View>
         </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    data_profile: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    screen: {
        flex: 1
    },
    title: {
        fontSize: 25,
        fontFamily: 'koho-bold',
        color: Colors.darkBlue,
        marginTop : 20,
        marginBottom: -10, 
    },
});

export default ProfilePage;