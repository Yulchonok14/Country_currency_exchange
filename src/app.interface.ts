import {ICountryInfoStateSegment} from './searchCountryInfo/searchCountryInfo.interface';
import {ICurrencyExchangeStateSegment} from './currencyExchange/currencyExchange.interface';

export type IStateSegment = ICountryInfoStateSegment &
ICurrencyExchangeStateSegment;
