import {FunctionComponent, memo, useState, useCallback} from 'react';
import {ISearchFormProps} from './searchForm.interface';
import {Button} from '../../_components/button/button';
import {Input} from '../../_components/input/input';
import {Form} from '../../_components/form/form';
import {connect} from 'react-redux';
import {onSearchClicked} from '../thunks';

export const SearchFormComponent = ({onSearchClicked}) => {
  const [newCountry, setNewCountry] = useState('');

  const seachInputHandler = useCallback((e) => {
    const value = e.target.value.replace(/[^A-Za-z-]/ig, '');
    setNewCountry(value);
  }, []);

  const seachButtonHandler = useCallback(() => {
    onSearchClicked(newCountry);
    setNewCountry('');
  }, [newCountry]);

  return (
    <Form formName={'Search'}>
      <Input
        placeholder="Enter the country name"
        value={newCountry}
        onChange={seachInputHandler}
      />
      <Button
        onClick={seachButtonHandler}
      >
        Get info
      </Button>
    </Form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSearchClicked: (name: string) => dispatch(onSearchClicked(name)),
});


export const SearchForm = memo(connect(null, mapDispatchToProps)(SearchFormComponent));