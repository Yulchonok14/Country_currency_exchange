import React, {FunctionComponent} from 'react';
import {IListProps} from './list.interface';
import styled from 'styled-components';

const ListWrapper = styled.div`
    width: 700px;
    margin: 50px 0;
`;

export const List: FunctionComponent<IListProps> = props => {
    const {children} = props;

    return <ListWrapper>{children}</ListWrapper>;
};
