import React from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import BlueRectangle from '../../components/UI/BlueRectangle';
import DataUser from '../../components/profile/DataUser';
import Colors from '../../constants/Colors';

const ProfilePage = props => {
    var icon = require('../../assets/profile/profilePhoto.png');
    return(
        <ScrollView style={{flexGrow: 1, paddingTop: 50, backgroundColor: "white"}}>
            <View style={styles.data_profile}>
                <Text style={styles.title}>Profil</Text>
                <DataUser
                firstName = 'Elise'
                name = 'Malard' 
                image = {require('../../assets/profile/profilePhoto.png')}
                level = 'level'
                />
            </View>
            <View style={styles.container}>
                <BlueRectangle title='Ma Routine' navigate={() => {props.navigation.navigate('Home')}} />
                <BlueRectangle title='Evolution de la peau' navigate={() => {props.navigation.navigate('SkinEvolution')}} />
                <BlueRectangle title='Prescription' />
                <BlueRectangle title='Capteur' navigate={() => {props.navigation.navigate('CaptorPage')}} />
                <BlueRectangle title='Dossier Médical' />
                <BlueRectangle title='Suggestions produits' />
                <BlueRectangle title="Photo d'urgence" />
            </View>
         </ScrollView>
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
        marginBottom : 200
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