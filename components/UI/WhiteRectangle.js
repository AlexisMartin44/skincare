import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../../constants/Colors';

const WhiteRectangle = props => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.number}>{props.name}</Text>
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
    backgroundColor: 'white',
    
    width: 200,
    height: 200,
    justifyContent: 'space-between',
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

export default WhiteRectangle;