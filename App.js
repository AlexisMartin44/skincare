import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from '@react-navigation/native';
import ReduxThunk from 'redux-thunk';
import { createNavigationContainerRef } from "@react-navigation/native";


import productsReducer from "./store/reducers/products";
import Tabs from './navigation/Tabs';
import MainNavigator from './navigation/MainNavigator';

LogBox.ignoreLogs(['Remote debugger']);

// Just one for the moment
const rootReducer = combineReducers({
    products: productsReducer
});

//Create store with our rootReducer
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {

  let [fontsLoaded] = useFonts({
    "koho": require("./assets/fonts/KoHo-Regular.ttf"),
    "koho-bold": require("./assets/fonts/KoHo-Bold.ttf"),
  });

  const navigationRef = createNavigationContainerRef();

  if(!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <MainNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}
