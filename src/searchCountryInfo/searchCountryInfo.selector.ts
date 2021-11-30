import {ICountryInfoStateSegment} from './searchCountryInfo.interface';

export const searchCountryInfoSelector = (state: ICountryInfoStateSegment) => {
    return state.country;
};
