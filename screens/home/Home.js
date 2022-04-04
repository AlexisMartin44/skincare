import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import Colors from '../../constants/Colors';

import InfoRectangle from '../../components/UI/InfoRectangle';
import WaterTracker from '../../components/routine/WaterTracker';
import Meteo from '../../components/routine/Meteo';

const Home = props => {
    const [currentUV, setCurrentUV] = useState("");

    return(  
        <ScrollView style={{flexGrow: 1, paddingTop: 50, backgroundColor: "white"}}>
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
                        <WaterTracker />
                    </View>
                </View>
                <View style={styles.subcontainer}>
                    <Text style={styles.subheading}>Recommandation météo</Text>
                    <View style={[styles.rectanglesContainers, {marginBottom: 300, marginLeft: -40, width: '200%'}]}>
                        <Meteo />
                        <Text style={styles.title}>Conseils</Text>
                    </View> 
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    subcontainer: {
        width: '80%',
        marginBottom: 30
    },
    title: {
        fontSize: 25,
        fontFamily: 'koho-bold',
        color: Colors.primary,
        marginBottom: 30, 
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