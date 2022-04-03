import React from 'react';
import Colors from '../../constants/Colors';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const PinkRectangle = ({ title,navigate }) => {
  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity onPress={navigate} style={styles.appButtonContainer}>
         <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  appButtonContainer: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    borderColor: Colors.darkPink,
    backgroundColor: Colors.primary,
    height: 40,
    width: 250,
    paddingLeft: 15,
    paddingVertical: 9,
    justifyContent: 'space-between',
    marginRight: 8,
  },
  appButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    fontSize: 15,
    color: Colors.white,
    opacity : 1
  }
});

export default PinkRectangle;