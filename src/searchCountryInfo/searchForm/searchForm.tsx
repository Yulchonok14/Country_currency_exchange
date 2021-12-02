import {FunctionComponent, memo, useState, useCallback} from 'react';
import {ISearchFormProps} from './searchForm.interface';
import {Button} from '../../_components/button/button';
import {Input} from '../../_components/input/input';
import {Form} from '../../_components/form/form';
import {connect} from 'react-redux';
import {onSearchClicked} from '../thunks';
import React from 'react';
import {AppDispatch} from '../../_store/rootReducer';

export const SearchFormComponent: FunctionComponent<ISearchFormProps> = ({
    onSearchClicked,
}) => {
    const [newCountry, setNewCountry] = useState('');

    const seachInputHandler = useCallback(e => {
        const value = e.target.value.replace(/[^A-Za-z-]/gi, '');
        setNewCountry(value);
    }, []);

    const seachButtonHandler = useCallback(() => {
        onSearchClicked(newCountry);
        setNewCountry('');
    }, [newCountry, onSearchClicked]);

    return (
        <Form formName={'Search'}>
            <Input
                placeholder="Enter the country name"
                value={newCountry}
                onChange={seachInputHandler}
            />
            <Button onClick={seachButtonHandler}>Get info</Button>
        </Form>
    );
};

export const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        onSearchClicked: (name: string) => {
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
            return dispatch<any>(onSearchClicked(name));
        },
    };
};

export const SearchForm = memo(
    connect(null, mapDispatchToProps)(SearchFormComponent)
);
