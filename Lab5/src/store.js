import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

// Reducer mẫu
const exampleReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage, 
};

const persistedExampleReducer = persistReducer(persistConfig, exampleReducer);

const rootReducer = combineReducers({
  example: persistedExampleReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
