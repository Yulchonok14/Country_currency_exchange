import {CurrencyExchangeAction} from "./currencyExchange.action";
import {ICurrencyExchangeState} from "./currencyExchange.interface";

const formatCurrencyInfo = (currencyInfo: Record<string, number>) => {
  const formattedCurrencyInfo: ICurrencyExchangeState = {
    baseAsset: Object.keys(currencyInfo)[0].split('_')[0],
    quoteAsset: Object.keys(currencyInfo)[0].split('_')[1],
    rates: Object.values(currencyInfo)[0],
  };

  return formattedCurrencyInfo;
}

export const onCurrencyChanged = (currency: string) => async (dispatch) => {
  try {
    const result = await fetch(`https://free.currconv.com/api/v7/convert?q=SEK_${currency}&compact=ultra&apiKey=17a09f2fac4d24c4f5ee`)
    const currencyInfo = await result.json();
    dispatch(CurrencyExchangeAction.currencyExchangeRequest(formatCurrencyInfo(currencyInfo)));
  } catch (e) {
    alert(e);
  }
};