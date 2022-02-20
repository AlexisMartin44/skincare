import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../../constants/Colors';

const InfoRectangle = props => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{props.title}</Text>
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
    borderColor: Colors.textBlue,
    backgroundColor: Colors.lightBlue,
    height: 20,
    width: 98,
    //paddingLeft: 15,
    paddingVertical: 5,
    justifyContent: 'space-between',
    marginRight: 20
  },
  title: {
      fontSize: 9,
      color: Colors.textBlue,
  }
});

export default InfoRectangle;