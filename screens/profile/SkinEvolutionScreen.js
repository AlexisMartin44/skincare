import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView, KeyboardAvoidingView,Platform} from 'react-native';

import PhotoInfo from '../../components/profile/PhotoInfo';
import Colors from '../../constants/Colors';

const SkinEvolutionScreen = props => {
    var icon = require('../../assets/profile/profilePhoto.png');
    return(
        <>
        <ScrollView style={{flexGrow: 1, paddingTop: 50, backgroundColor: "white"}}>
            <View style={styles.data_profile}>
                <Text style={styles.title}>My Skin Evolution</Text>
                <Text style={styles.subtitle}>All pictures :</Text>
            </View>
            <View style={styles.container}>
                
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
        color: Colors.primary,
        marginTop : 20,
        marginBottom: -10, 
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'koho',
        color: Colors.primary,
        marginTop : 20,
        marginBottom: -10, 
    },
});

export default SkinEvolutionScreen;