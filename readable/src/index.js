import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider>
			<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
