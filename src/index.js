import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/containers/App/App';
import * as serviceWorker from './serviceWorker';
import store from './app/configureStore';

const render = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

render();

store.subscribe(render);

serviceWorker.unregister();
