import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './_store/rootReducer';
import {Loader} from './_components/loader/loader';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
