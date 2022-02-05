import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

import productsReducer from "./store/reducers/products";
import Navigator from './navigation/Navigator';

// Just one for the moment
const rootReducer = combineReducers({
    products: productsReducer
});

//Create store with our rootReducer
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
