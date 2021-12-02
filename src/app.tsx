import styled from 'styled-components';
import React from 'react';
import {SearchForm} from './searchCountryInfo/searchForm/searchForm';
import {CurrencyForm} from './currencyExchange/currencyForm/currencyForm';
import {CountryInfoPanel} from './countryInfo/countryInfoPanel';

const AppWrapper = styled.div`
    text-align: center;
    background-color: #cfcfcf;
    min-height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: calc(10px + 2vmin);
    padding: 50px;
`;

function App() {
    return (
        <AppWrapper>
            <SearchForm />
            <CountryInfoPanel />
            <CurrencyForm />
        </AppWrapper>
    );
}

export default App;
