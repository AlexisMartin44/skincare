import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

import BlueRectangle from '../../components/UI/BlueRectangle';
import DataUser from '../../components/profile/DataUser';
import Colors from '../../constants/Colors';

const ProfilePage = props => {
    var icon = require('../../assets/profile/profilePhoto.png');
    return(
        <><View style={styles.data_profile}>
                <Text>ProfilePage screen</Text>
                <DataUser 
                firstName = 'Elise'
                name = 'Malard' 
                image = {require('../../assets/profile/profilePhoto.png')}
                />
            </View>
            <View style={styles.container}>
                <BlueRectangle title='My Routine' />
                <BlueRectangle title='Skin Evolution' />
                <BlueRectangle title='Prescription' />
                <BlueRectangle title='Medical File' />
                <BlueRectangle title='Product Suggestion' />
                <BlueRectangle title='Emergency Photo' />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    data_profile: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default ProfilePage;