import React, {FunctionComponent} from 'react';
import {IButtonProps} from './button.interface';
import styled from 'styled-components';

const CommonButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin: 0 20px;
    width: 20%;
    background-color: #f1e894;

    &:hover {
        background-color: #e2ef63;
        transform: scale(1.05);
    }
`;

export const Button: FunctionComponent<IButtonProps> = props => {

    return (
        <CommonButton
            type={'button'}
            {...props}
        ></CommonButton>
    );
};
