import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';

import render               from './packages/render/Render'
import * as serviceWorker   from './packages/service/worker';


render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
