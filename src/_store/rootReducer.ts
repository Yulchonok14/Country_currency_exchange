import {combineReducers} from 'redux';
import {IStateSegment} from '../app.interface';
import {countryInfoReducer} from '../searchCountryInfo/searchCountryInfo.reducer';
import {applyMiddleware, CombinedState, createStore} from 'redux';
import {initialState} from '../app.constant';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {ICountryInfoStateSegment} from '../searchCountryInfo/searchCountryInfo.interface';
import thunk from 'redux-thunk';
import { currencyExchangeReducer } from '../currencyExchange/currencyExchange.reducer';

const rootReducer = combineReducers<IStateSegment>({
    country: countryInfoReducer,
    currency: currencyExchangeReducer
});

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
  };

const persistedReducer = persistReducer<CombinedState<IStateSegment>>(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);