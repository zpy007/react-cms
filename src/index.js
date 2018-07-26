import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import MenuContainer from './menu/menucontainer';

ReactDOM.render(<MenuContainer />, document.getElementById('root'));
registerServiceWorker();
