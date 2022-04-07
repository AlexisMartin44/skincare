import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import PinkRectangle from '../../components/UI/PinkRectangle';
import {doc, getDoc} from "firebase/firestore";
import { db } from "../../firebase";




const CaptorPage = props => {

    const [value, setValue] = useState("0");

    const connect = async () => {
        let str = "";
        const docRef = doc(db, "captor", "data");
        const docSnap = await getDoc(docRef); 
        const keys = Object.keys(docSnap.data());
        keys.forEach(key => {
            str += docSnap.data()[key];
        })
        setValue(str);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Capteur</Text>
            <PinkRectangle title="Connecter le capteur" navigate={() => connect()}/>
            <View style={styles.dataContainer}>
                <Text style={styles.text}>Taux d'humidité : {value}%</Text>
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