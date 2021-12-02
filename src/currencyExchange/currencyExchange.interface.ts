export interface ICurrencyExchangeState {
    baseAsset: string;
    quoteAsset: string;
    rates: number;
}

export interface ICurrencyExchangeStateSegment {
    currency: ICurrencyExchangeState;
}
