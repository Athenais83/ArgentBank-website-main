import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../redux/reducers';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const persistConfig = {
  key: 'root', // Clé de persistance, peut être modifiée selon vos besoins
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // Appliquez la configuration de persistance à votre rootReducer

const store = configureStore({
  reducer: persistedReducer, // Spécifiez le reducer dans les options de configureStore
  // Ajoutez d'autres options ou middleware ici si nécessaire
}, reduxDevtools);

const persistor = persistStore(store);

export { store, persistor };