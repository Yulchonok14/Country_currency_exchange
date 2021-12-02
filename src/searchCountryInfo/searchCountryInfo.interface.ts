export interface ICountryInfoState {
    name: string;
    capital: string;
    population: number;
    currency: string;
    loading: boolean;
    error: boolean;
}

export interface ICountryInfoStateSegment {
    country: ICountryInfoState;
}
