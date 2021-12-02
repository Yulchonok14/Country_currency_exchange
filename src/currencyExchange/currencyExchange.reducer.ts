import {reducerWithInitialState} from 'typescript-fsa-reducers';
import {CurrencyExchangeAction} from './currencyExchange.action';
import {currencyExchangeInitialState} from './currencyExchange.constant';

export const currencyExchangeReducer = reducerWithInitialState(
    currencyExchangeInitialState
).case(CurrencyExchangeAction.currencyExchangeRequest, (state, payload) => {
    return {
        ...state,
        ...payload,
    };
});
