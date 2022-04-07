import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Box, Image, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import {API_KEY_METEO} from '@env';


const Meteo = (props) => {
  const [meteo, setMeteo] = useState([]);
  const [uv, setUv] = useState("");
  
  const fetchMeteo = async () => {
    await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY_METEO}&q=Paris&days=2&aqi=no&alerts=no`)
      .then(res => res.json())
      .then((res) => {
        let hoursToDisplay = [];
        for(let j=0; j<2; j++) {
          res['forecast']['forecastday'][j]['hour'].forEach(hour => {
            let tempHour = '';
            for(let i=0; i<hour['time'].length; i++){
              if(i != 10) {
                tempHour += hour['time'][i];
              } else {
                tempHour += 'T';
              }
            }
            if(Date.now() < Date.parse(tempHour) && hoursToDisplay.length < 10) {
              hoursToDisplay.push(hour);
            }    
          });
        } 
        setMeteo(hoursToDisplay);
        if(hoursToDisplay[0]["uv"] < 3) {
          setUv("Pas besoin de crème solaire.");
        } else if(hoursToDisplay[0]["uv"] < 6) {
          setUv("Ecran total SPF 30 et porter des tee-shirts manches longues.")
        } else if(hoursToDisplay[0]["uv"] < 8) {
          setUv("Ecran total SPF 30 et porter des lunettes de soleils / chapeau et les manches couvertes.")
        } else {
          setUv("Ecran total SPF 60 et être totalement couvert. Appliquer de la crème toutes les 2 heures.")
        }
      })
      .catch((err) => console.log(err));
  } 

  useEffect(() => {
      fetchMeteo();
  }, []); 


 

  return ( 
    <View style={{height: "65%"}}>
      <ScrollView showsHorizontalScrollIndicator={false} style={{height: "57%"}} horizontal={true}>
        <View style={styles.scrollView}>
        {
          meteo.map((hour, index, array) => {
            let time = hour['time'].split(" ")[1].split(":").join('h');
            return ( 
              <View style={styles.card} key={index}>
                <Text style={styles.hour}>{time}</Text>
                <Image style={{width: '50%', height: '50%'}} source={{uri: "https:" + hour['condition']['icon']}} />
                <Text style={styles.title}>{hour['temp_c'] + "°"}</Text>
                <Text style={styles.uv}>{"UV " + hour['uv']}</Text>
              </View>
            ); 
          })
        }
        </View>
      </ScrollView>
      <View style={styles.textContainer}>
        <Text style={styles.hint}>Conseils</Text>
        <Text style={styles.text}> ▪️ {uv}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingLeft: 15,
    paddingRight: 300
  },
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 }, 
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "#F6F5FB",
    height: 115,
    width: 80,
    paddingVertical: 5,
    justifyContent: 'space-between',
    alignItems: "center",
    marginRight: 20,
    fontFamily: 'koho',
    paddingBottom: 20
  },
  hour: {
      fontSize: 10,
      color: Colors.darkBlue,
      fontFamily: 'koho'
  },
  title: {
      fontSize: 15,
      color: Colors.darkBlue,
      fontFamily: 'koho'
  },
  uv: {
      fontSize: 10,
      color: Colors.darkBlue,
      fontFamily: 'koho',
  },
  number: {
    fontSize: 24,
    color: Colors.darkPink,
    fontFamily: 'koho-bold'
  },
  hint: {
    fontSize: 20,
    fontFamily: "koho-bold",
    color: Colors.darkBlue
  },
  textContainer: {
    marginLeft: 60
  },
  text: {
    color: Colors.darkBlue,
    fontFamily: "koho",
    maxWidth: 300,
  }
});

export default Meteo;
