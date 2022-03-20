import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const SkinEvolution = props => {
    return(
        <View style={styles.container}>
            <Text>SkinEvolution screen</Text>
            <Button
                title='Click here'
                onPress={() => alert('Button clicked')} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
});

export default SkinEvolution;