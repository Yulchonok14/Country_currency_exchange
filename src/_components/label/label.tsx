import React, {FunctionComponent} from 'react';
import {ILabelProps} from './label.interface';
import styled from 'styled-components';

export const CommonLabel = styled.label`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #f1e894;
    border-radius: 8px;
    outline: none;
    margin: 0 10px;
`;

export const Label: FunctionComponent<ILabelProps> = props => {
    return <CommonLabel {...props}></CommonLabel>;
};
