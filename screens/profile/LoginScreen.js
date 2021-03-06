import React, {useReducer, useCallback, useEffect} from 'react';
import { ScrollView, KeyboardAvoidingView, View, StyleSheet, Platform, Text, TouchableOpacity, Touchable } from 'react-native';
import { useDispatch } from 'react-redux';

import Input from '../../components/UI/Input';
import Colors from '../../constants/Colors';
import * as authActions from '../../store/actions/auth';
import { auth } from '../../firebase';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
      const updatedValues = {
        ...state.inputValues,
        [action.input]: action.value
      };
      const updatedValidities = {
        ...state.inputValidities,
        [action.input]: action.isValid
      };
      let updatedFormIsValid = true;
      for (const key in updatedValidities) {
        updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
      }
      return {
        formIsValid: updatedFormIsValid,
        inputValidities: updatedValidities,
        inputValues: updatedValues
      };
    }
    return state;
  };


const LoginScreen = props => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                props.navigation.navigate('Tabs');
            }
        })
    }, [])

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
          email: '',
          password: '',
        },
        inputValidities: {
          email: false,
          password: false,
        },
        formIsValid: false
    });

    const loginHandler = () => {
        dispatch(
            authActions.login(
                formState.inputValues.email,
                formState.inputValues.password
            )
        );
    }

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
          dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
          });
        },
        [dispatchFormState]
      );

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? "height": "padding"}
            style={styles.screen}
        >
            <ScrollView contentContainerStyle={styles.authContainer}>
                <View>
                    <Text style={styles.title}>Se connecter</Text>
                </View>
                <View style={{width: "80%"}}>
                    <Input
                        id="email"
                        label="Mail"
                        keyboardType="email-address"
                        required
                        email
                        autoCapitalize="none"
                        errorText="Please enter a valid email address."
                        onInputChange={inputChangeHandler}
                        initialValue=""
                    />
                    <Input
                        id="password"
                        label="Mot de passe"
                        keyboardType="default"
                        secureTextEntry
                        required
                        minLength={5}
                        autoCapitalize="none"
                        errorText="Please enter a valid password."
                        onInputChange={inputChangeHandler}
                        initialValue=""
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={loginHandler}>
                        <Text style={styles.buttonText}>Se connecter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {props.navigation.navigate('AuthScreen')}} style={{color: "black"}} > 
                        <Text style={{color: Colors.darkBlue}}>Pas de compte ? S'inscrire</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    authContainer: {
        backgroundColor: "#ffffff",
        padding: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: "100%",
    },
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title: {
        color: Colors.primary,
        fontFamily: "koho",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 25,
        lineHeight: 32,
        marginBottom: 25
    },
    button: {
        width: "40%",
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: Colors.primary,
        height: 40,
        justifyContent: 'center',
        elevation: 4,
        marginBottom: 20
    },
    namesContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    nameInput: {
        width: '40%'
    },
    buttonText: {
        color: 'white',
        fontFamily: 'koho-bold',
        fontSize: 20,
    }
});

export default LoginScreen;