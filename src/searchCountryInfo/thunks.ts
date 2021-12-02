import {SearchFormAction} from './searchCountryInfo.action';
import {ICountryInfoState} from './searchCountryInfo.interface';
import {AppDispatch} from '../_store/rootReducer';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const formatCountryInfo = (countryInfo: any) => {
    const formattedCountryInfo: Partial<ICountryInfoState> = {
        name: countryInfo[0].name.official,
        capital: countryInfo[0].capital[0],
        population: countryInfo[0].population,
        currency: Object.keys(countryInfo[0].currencies)[0],
    };

    return formattedCountryInfo;
};

export const onSearchClicked = (countryName: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(SearchFormAction.searchCountryInfoLoadingRequest(true));
            const result = await fetch(
                `https://restcountries.com/v3.1/name/${countryName}`
            );
            const countryInfo = await result.json();
            dispatch(
                SearchFormAction.searchCountryInfoRequest(
                    formatCountryInfo(countryInfo)
                )
            );
            dispatch(SearchFormAction.searchCountryInfoSuccessRequest(false));
        } catch (e) {
            dispatch(SearchFormAction.searchCountryInfoFailRequest(false));
        }
    };
};
