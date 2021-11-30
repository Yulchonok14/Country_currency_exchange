import React, {FunctionComponent} from 'react';
import {IInputProps} from './input.interface';
import styled from 'styled-components';

const CommonInput = styled.input`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #ddd;
    border-radius: 8px;
    width: 70%;
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type=number] {
        -moz-appearance: textfield;
    }
`;

export const Input: FunctionComponent<IInputProps> = props => {

    return (
        <CommonInput
            type={'text'}
            {...props}
        ></CommonInput>
    );
};
