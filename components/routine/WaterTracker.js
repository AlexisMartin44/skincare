import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';



const WaterTracker = props => {

    const [isActive, setIsActive] = useState([false, false, false, false, false, false, false, false]);
    const [heightBottle, setHeightBottle] = useState(0);
    const [totalDrank, setTotalDrank] = useState(0.0);

    const handleBottlePressure = (index) => {
        let temp = [];
        if(isActive[index-1] === true && index === 8) {
            temp = isActive;
            temp[index-1] = false;
            setIsActive([...temp]);
        } else {
            if(isActive[index] === true) {
                temp = [];
                for(let i=0; i<8; i++) {
                    if(i<index)
                        temp[i] = true;
                    else
                        temp[i] = false;
                }
                setIsActive([...temp]);
            } else {
                if(isActive[index-1] === false) {
                    index++;
                }
                temp = [];
                for(let i=0; i<8; i++) {
                    if(i<index-1)
                        temp[i] = true;
                    else
                        temp[i] = false;
                }
                setIsActive([...temp]);
            }
        }

        let sum = 0;
        for(let i=0; i<8; i++) {
            if(temp[i]) {
                sum++;
            }
        }
        setTotalDrank(sum * 0.25);
        setHeightBottle((150.0 / 8.0) * sum);
    }

    const resetBottles = () => {
        setIsActive([false, false, false, false, false, false, false, false])
        setTotalDrank(0);
        setHeightBottle(0);
    }
    
    const bottleActive = (index) => {
        return{
            backgroundColor: isActive[index-1] ? "#308fee" : 'white',
            color: isActive[index-1] ? "white" : Colors.darkBlue,
        }
    }

    const empty = () => {
        return {
            height: 150 - heightBottle,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }
    }

    const full = () => {
        return {
            zIndex: 10,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            backgroundColor: "#308fee",
            height: heightBottle
        }
    }

    const text = (index) => {
        return {
            textAlign: 'center',
            fontFamily: 'koho',
            color: isActive[index-1] ? 'white' : Colors.darkBlue,
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.bottlesContainer}>
                <TouchableOpacity style={[styles.bottle, bottleActive(1)]} onPress={() => {handleBottlePressure(1)}}>
                    <Text style={text(1)}>250 ml</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bottle, bottleActive(2)]} onPress={() => {handleBottlePressure(2)}}>
                    <Text style={text(2)}>250 ml</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bottle, bottleActive(3)]} onPress={() => {handleBottlePressure(3)}}>
                    <Text style={text(3)}>250 ml</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bottle, bottleActive(4)]} onPress={() => {handleBottlePressure(4)}}>
                    <Text style={text(4)}>250 ml</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bottle, bottleActive(5)]} onPress={() => {handleBottlePressure(5)}}>
                    <Text style={text(5)}>250 ml</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bottle, bottleActive(6)]} onPress={() => {handleBottlePressure(6)}}>
                    <Text style={text(6)}>250 ml</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bottle, bottleActive(7)]} onPress={() => {handleBottlePressure(7)}}>
                    <Text style={text(7)}>250 ml</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bottle, bottleActive(8)]} onPress={() => {handleBottlePressure(8)}}> 
                    <Text style={text(8)}>250 ml</Text>
                </TouchableOpacity>
            </View>
            <View style={{width: '50%', alignItems: 'center'}}>
                <TouchableOpacity style={styles.bottleTotal} onPress={() => {resetBottles()}}>
                    <View style={empty()}><Text style={{color: Colors.darkBlue, fontFamily: 'koho-bold', textAlign: 'center'}}>{2 - totalDrank}L restant</Text></View>
                    <View style={full()}><Text style={{color: 'white', fontFamily: 'koho-bold'}}>{totalDrank}L bu</Text></View>
                </TouchableOpacity>
                <Text style={{textAlign: 'center', marginTop: 10, fontFamily: 'koho'}}>Sélectionnez combien de verres vous avez bu</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    "bottleTotal": {
        height: 150,
        width: 75,
        backgroundColor: "white",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        textAlign: "center",
        overflow: "hidden",
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: "#174574"
    },
    "bottlesContainer": { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: "wrap", 
        width: "60%" 
    },
    "bottle": {
        height: 60,
        backgroundColor: "white",
        width: 35,
        marginLeft: 20,
        marginTop: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        fontSize: 0.6,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: "#174574"
    },
});

export default WaterTracker;
