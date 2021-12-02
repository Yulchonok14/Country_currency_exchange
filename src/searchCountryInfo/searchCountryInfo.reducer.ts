import {reducerWithInitialState} from 'typescript-fsa-reducers';
import {SearchFormAction} from './searchCountryInfo.action';
import {countryInfoInitialState} from './searchCountryInfo.constant';

export const countryInfoReducer = reducerWithInitialState(
    countryInfoInitialState
)
    .case(SearchFormAction.searchCountryInfoRequest, (state, payload) => {
        return {
            ...state,
            ...payload,
        };
    })
    .case(
        SearchFormAction.searchCountryInfoLoadingRequest,
        (state, payload) => {
            return {
                ...state,
                loading: payload,
            };
        }
    )
    .case(
        SearchFormAction.searchCountryInfoSuccessRequest,
        (state, payload) => {
            return {
                ...state,
                loading: payload,
            };
        }
    )
    .case(SearchFormAction.searchCountryInfoFailRequest, (state, payload) => {
        return {
            ...state,
            loading: payload,
            error: true,
        };
    });
