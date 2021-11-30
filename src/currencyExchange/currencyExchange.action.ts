import actionCreatorFactory from 'typescript-fsa';
import {ICurrencyExchangeState} from './currencyExchange.interface';

export namespace CurrencyExchangeAction {
    const actionCreator = actionCreatorFactory('CurrencyExchange');

    export const currencyExchangeRequest = actionCreator<Partial<ICurrencyExchangeState>>('CURRENCY_EXCHANGE');
}