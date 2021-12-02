import {mapDispatchToProps} from './searchForm';

export interface ISearchFormProps {}

export interface ISearchFormProps
    extends ReturnType<typeof mapDispatchToProps> {}
