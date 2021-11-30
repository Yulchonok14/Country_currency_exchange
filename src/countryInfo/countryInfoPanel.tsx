import {FunctionComponent, memo} from 'react';
import {ICountryInfoPanelProps} from './countryInfoPanel.interface';
import {List} from '../_components/list/list';
import {ListItem} from '../_components/list/listItem/listItem';
import {useSelector} from 'react-redux';
import {Label} from '../_components/label/label';
import {searchCountryInfoSelector} from '../searchCountryInfo/searchCountryInfo.selector';
import {Loader} from '../_components/loader/loader';
import styled from 'styled-components';

const CountryInfo = styled.div`
  position: relative; 
  height: 410px;
`;

export const CountryInfoPanelComponent: FunctionComponent<ICountryInfoPanelProps> = () => {
  const {name, capital, population, currency, loading} = useSelector(searchCountryInfoSelector);

  return (
    <CountryInfo>
      <List>
        {loading ? <Loader/> : 
        <>
          <ListItem><Label style={{width: '200px'}}>COUNTRY NAME:</Label>{name}</ListItem>
          <ListItem><Label style={{width: '200px'}}>CAPITAL:</Label>{capital}</ListItem>
          <ListItem><Label style={{width: '200px'}}>POPULATION:</Label>{population}</ListItem>
          <ListItem><Label style={{width: '200px'}}>CURRENCY:</Label>{currency}</ListItem>
        </>
        }
      </List>
      </CountryInfo>
  );
}

export const CountryInfoPanel = memo(CountryInfoPanelComponent);