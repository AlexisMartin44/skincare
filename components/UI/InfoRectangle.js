import React from 'react';
import { View, StyleSheet, Text,Image } from 'react-native';
import Colors from '../../constants/Colors';

const InfoRectangle = props => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.number} source={props.image}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 180,
    width: 105,
    paddingLeft: 15,
    paddingVertical: 5,
    justifyContent: 'space-between',
    marginRight: 20
  },
  title: {
      fontSize: 15,
      color: Colors.darkBlue,
  },
  number: {
    fontSize: 24,
    fontFamily: 'koho-bold',
    width: 70, height: 130,
  }
});

export default InfoRectangle;
