import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import {ILoaderProps} from './loader.interface';

const CommonLoader = styled.div`
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 100px;
`;

export const Loader: FunctionComponent<ILoaderProps> = () => {
    return (
        <CommonLoader>
            <i className="fa fa-cog fa-spin" />
        </CommonLoader>
    );
};
