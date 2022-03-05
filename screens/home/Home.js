import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image} from 'react-native';
import Colors from '../../constants/Colors';

import InfoRectangle from '../../components/UI/InfoRectangle';
import WaterTracker from '../../components/routine/WaterTracker';
import Meteo from '../../components/routine/Meteo';

const Home = props => {
    return(  
        <ScrollView style={{flexGrow: 1, paddingTop: 50, backgroundColor: "white"}}>
            <View style={styles.container}>
                <Text style={styles.title}>ACTUALITE</Text>
                <View style={styles.subcontainer}>
                    <Text style={styles.subheading}>Mes préférences</Text>
                    <View style={styles.rectanglesContainers}>
                        <InfoRectangle title={"Racing Surf"} value={2} image={require('../../assets/snow2.jpg')}/>
                        <InfoRectangle title={"Free Surf"} value={1} image={require('../../assets/snow3.jpg')}/>
                    </View>
                </View>
                <View style={styles.subcontainer}>
                    <Text style={styles.subheading}>Promos du jour</Text>
                    <View style={styles.rectanglesContainers}>
                        <View style={styles.imageContainer}>
                            <Image style={{ width: 350, height: 209}} source= {require('../../assets/promo.png')}/>
                        </View>
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
        color: Colors.darkBlue,
        fontSize: 24,
        fontFamily: 'koho-light',
        marginBottom: 10
    },
    rectanglesContainers: {
        flexDirection: 'row'
    }
});

export default Home;