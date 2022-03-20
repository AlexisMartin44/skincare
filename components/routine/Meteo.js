import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import {WEATHERSTACK_API_KEY} from '@env';


const fetchMeteo = async () => {
  let response = fetch('http://api.weatherapi.com/v1/future.json', {
    method: 'POST',
    headers: {
      'X-Auth-Token': WEATHERSTACK_API_KEY,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(() => console.log("Error with loading meteo"))
  console.log(response);
}

const Meteo = props => {
    return (
        <TouchableOpacity style={styles.card} onPress={fetchMeteo}>
            <Text style={styles.title}>{WEATHERSTACK_API_KEY}</Text>
            <Text style={styles.number}>{props.value}</Text>
            <Text>{process.env.WEATHERSTACK_API_KEY}</Text>
        </TouchableOpacity>
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
