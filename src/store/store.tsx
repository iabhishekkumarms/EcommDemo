import createSagaMiddleware from 'redux-saga';
import reduxStorage from '../utils/storage';
import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import {configureStore} from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['login', 'cart', 'wishlist', 'address'],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
