import {ICurrencyExchangeStateSegment} from './currencyExchange.interface';

export const currencyExchangeSelector = (state: ICurrencyExchangeStateSegment) => {
    return state.currency;
};
