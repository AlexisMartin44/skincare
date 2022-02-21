import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import BlueRectangle from '../../components/UI/BlueRectangle';
import Colors from '../../constants/Colors';

const ProfilePage = props => {
    return(
        <View style={styles.container}>
            <Text>ProfilePage screen</Text>
            <BlueRectangle title='My Routine'/>
            <BlueRectangle title='Skin Evolution'/>
            <BlueRectangle title='Prescription'/>
            <BlueRectangle title='Medical File'/>
            <BlueRectangle title='Product Suggestion'/>
            <BlueRectangle title='Emergency Photo'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#8fcbbc'
    }
});

export default ProfilePage;