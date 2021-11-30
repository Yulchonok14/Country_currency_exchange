import {FunctionComponent, memo, useState, useCallback, useEffect} from 'react';
import {ICurrencyFormProps} from './currencyForm.interface';
import {Input} from '../../_components/input/input';
import {Label} from '../../_components/label/label';
import {Form} from '../../_components/form/form';
import {connect, useSelector} from 'react-redux';
import {currencyExchangeSelector} from '../currencyExchange.selector';
import {searchCountryInfoSelector} from '../../searchCountryInfo/searchCountryInfo.selector';
import {onCurrencyChanged} from '../thunks';

export const CurrencyFormComponent = ({onCurrencyChanged}) => {
  const {baseAsset, quoteAsset, rates} = useSelector(currencyExchangeSelector);
  const {currency} = useSelector(searchCountryInfoSelector);
  const [money, setMoney] = useState<number|string>(1);
  const [exchangedMoney, setExchangedMoney] = useState<number|string>();
  
  const exchangeBaseInputHandler = useCallback((e) => {
    if (!e.target.value) {
      setExchangedMoney('');
      setMoney('');
    } else {
      const value = e.target.value.replace(/[^0-9,.]/ig, '');
      setMoney(value);
      Number(value) === 0 ? setExchangedMoney((0).toFixed(1)) : setExchangedMoney((value * rates).toFixed(2));
    }
  },[]);

  const exchangeQuoteInputHandler = useCallback((e) => {
    if (!e.target.value) {
      setExchangedMoney('');
      setMoney('');
    } else {
      const value = e.target.value.replace(/[^0-9,.]/ig, '');
      setExchangedMoney(value);
      Number(value) === 0 ? setMoney((0).toFixed(1)) : setMoney((value / rates).toFixed(2));
    }
    
  }, [rates]);

  useEffect(() => {
    onCurrencyChanged(currency);
  }, [currency]);

  useEffect(() => {
    setExchangedMoney((Number(money) * rates).toFixed(2))
  }, [rates]);

  return (
    <Form formName={'Exchange'} style={{width: '30%'}}>
      <div>
        <Input
          value={money}
          type="number"
          style={{width: '60%'}}
          onChange={exchangeBaseInputHandler}
        />
        <Label>{baseAsset}</Label>
      </div>
      <div>
        <Input
          value={exchangedMoney}
          type="number"
          style={{width: '60%'}}
          onChange={exchangeQuoteInputHandler}
        />
        <Label>{quoteAsset}</Label>
      </div>
    </Form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onCurrencyChanged: (name: string) => dispatch(onCurrencyChanged(name)),
});


export const CurrencyForm = memo(connect(null, mapDispatchToProps)(CurrencyFormComponent));