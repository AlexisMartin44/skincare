import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import BlueRectangle from '../../components/UI/BlueRectangle';
import Colors from '../../constants/Colors';

const ProfilePage = props => {
    return(
        <View style={styles.container}>
            <Text>ProfilePage screen</Text>
            <BlueRectangle>
                <Button
                    title='MyRoutine'
                    onPress={() => alert('Button clicked')} 
                />
            </BlueRectangle>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#8fcbbc'
    }
});

export default ProfilePage;