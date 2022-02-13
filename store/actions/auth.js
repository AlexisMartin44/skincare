export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

import { auth } from "../../firebase";

export const signup = (email, password, firstName, lastName) => {
  return async dispatch => {

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log("Registered in with :", user.email);
      })
      .catch(error => alert(error.message));

    // const response = await fetch(
    //   'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD23fPcux4sIObvJiUcC4NiLo9iOuP-Mas',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       email: email,
    //       password: password,
    //       firstName: firstName,
    //       lastName: lastName,
    //       returnSecureToken: true
    //     })
    //   }
    // );

    // if (!response.ok) {
    //   throw new Error('Something went wrong!');
    // }

    // const resData = await response.json();
    // console.log(resData);
    dispatch({ type: SIGNUP });
  };
};

export const login = (email, password) => {
  return async dispatch => {

    auth
      .signInWithEmailAndPassword(email, password) 
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log("Logged in with : ", user.email);
      })
      .catch(error => {
        console.log(email);
        alert(error.message);
      });

    // const response = await fetch(
    //   'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD23fPcux4sIObvJiUcC4NiLo9iOuP-Mas',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       email: email,
    //       password: password,
    //       returnSecureToken: true
    //     })
    //   }
    // );

    // if (!response.ok) {
    //   throw new Error('Something went wrong!');
    // }

    // const resData = await response.json();
    // console.log(resData);
    dispatch({ type: LOGIN });
  };
};