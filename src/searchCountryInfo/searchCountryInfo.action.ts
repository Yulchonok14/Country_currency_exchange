import actionCreatorFactory from 'typescript-fsa';
import {ICountryInfoState} from './searchCountryInfo.interface';

export namespace SearchFormAction {
    const actionCreator = actionCreatorFactory('SearchForm');

    export const searchCountryInfoRequest = actionCreator<
    Partial<ICountryInfoState>
    >('SEARCH_COUNTRY_INFO');

    export const searchCountryInfoLoadingRequest = actionCreator<boolean>(
        'SEARCH_COUNTRY_INFO_LOADING'
    );

    export const searchCountryInfoSuccessRequest = actionCreator<boolean>(
        'SEARCH_COUNTRY_INFO_SUCCESS'
    );

    export const searchCountryInfoFailRequest = actionCreator<boolean>(
        'SEARCH_COUNTRY_INFO_FAIL'
    );
}
