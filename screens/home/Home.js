import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

import InfoRectangle from '../../components/UI/InfoRectangle';

const Home = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Ma Routine du jour</Text>
            <View style={styles.subcontainer}>
                <Text style={styles.subheading}>Prescription du jour</Text>
                <View style={styles.rectanglesContainers}>
                    <InfoRectangle title={"Roaccutane"} value={2}/>
                    <InfoRectangle title={"Crème de jour"} value={1}/>
                    <InfoRectangle title={"Vitamines"} value={3}/>
                </View>
            </View>
            <View style={styles.subcontainer}>
                <Text style={styles.subheading}>Tracker d'eau</Text>
                <View style={styles.rectanglesContainers}>
                    
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    subcontainer: {
        width: '80%',
        marginBottom: 15
    },
    title: {
        fontSize: 25,
        fontFamily: 'koho-bold',
        color: Colors.primary,
    },
    subheading: {
        color: Colors.secondary,
        fontSize: 24,
        fontFamily: 'koho-light',
        marginBottom: 10
    },
    rectanglesContainers: {
        flexDirection: 'row'
    }
});

export default Home;