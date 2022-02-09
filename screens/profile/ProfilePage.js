import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ProfilePage = props => {
    return(
        <View style={styles.container}>
            <Text>ProfilePage screen</Text>
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

export default ProfilePage;