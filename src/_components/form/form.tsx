import React, {FunctionComponent} from 'react';
import {IFormProps, IFormExtendProps} from './form.interface';
import styled from 'styled-components';
import {CommonLabel} from '../label/label';

const CommonForm = styled.form`
    position: relative;
    width: 70%;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px grey;
`;

const FormNameLabel = styled(CommonLabel)`
    position: absolute;
    top: -10px;
    left: 10px;
    background: #f1e894;
    padding: 0 8px;
`;

export const Form: FunctionComponent<IFormExtendProps> = props => {
    const {formName, children, ...rest} = props;

    return (
        <CommonForm {...(rest as IFormProps)}>
            {formName ? <FormNameLabel>{formName}</FormNameLabel> : null}
            {children}
        </CommonForm>
    );
};
