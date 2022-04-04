import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import PinkRectangle from '../../components/UI/PinkRectangle';


const CaptorPage = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Capteur</Text>
            <PinkRectangle title="Connecter le capteur" />
            <View style={styles.dataContainer}>
                <Text style={styles.text}>Taux d'humidité : </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'white'
    },
    dataContainer: {
        flex: 1,
    },
    title: {
        marginTop: 50,
        fontSize: 25,
        fontFamily: 'koho-bold',
        color: Colors.primary,
        marginBottom: 30, 
    },
    text: {
        fontFamily: 'koho',
    }
});

export default CaptorPage;