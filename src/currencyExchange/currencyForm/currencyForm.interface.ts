import {mapDispatchToProps} from './currencyForm';

export interface ICurrencyFormProps {}

export interface ICurrencyFormProps
    extends ReturnType<typeof mapDispatchToProps> {}
