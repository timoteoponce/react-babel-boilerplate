import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './main.css';
//custom code for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(<App/>, document.getElementById('container'));
