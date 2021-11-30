import {IStateSegment} from './app.interface';

export const initialState: Partial<IStateSegment> = {
    country: {
        name: 'United Kingdom',
        capital: 'London',
        population: 67215293,
        currency: 'GBP',
        loading: false,
        error: false
    },
    currency: {
        baseAsset: 'SEK',
        quoteAsset: 'GBP',
        rates: 0.082812
    }
};