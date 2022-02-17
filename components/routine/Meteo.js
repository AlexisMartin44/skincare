import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../../constants/Colors';

const Meteo = props => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.number}>{props.value}</Text>
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
    backgroundColor: Colors.lightPink,
    height: 90,
    width: 98,
    paddingLeft: 15,
    paddingVertical: 5,
    justifyContent: 'space-between',
    marginRight: 20
  },
  title: {
      fontSize: 10,
      color: Colors.darkPink,
  },
  number: {
    fontSize: 24,
    color: Colors.darkPink,
    fontFamily: 'koho-bold'
  }
});

export default Meteo;
