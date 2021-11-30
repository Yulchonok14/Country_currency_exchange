import React, {FunctionComponent} from 'react';
import {IListItemProps} from './listItem.interface';
import styled from 'styled-components';

const ListItemWrapper = styled.div`
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
    display: flex;
    font-size: 20px;
    border-bottom: 4px solid #f1e894;

    &:hover {
        transform: scale(1.05);
        box-shadow: 4px 2px 9px 2px #e2ef63;
    }
    `;

export const ListItem: FunctionComponent<IListItemProps> = props => {
    const {children} = props;

    return (
        <ListItemWrapper>
            {children}
        </ListItemWrapper>
    );
};
