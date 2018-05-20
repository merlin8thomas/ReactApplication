import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import  MyTask from './examples/component/props_example_one';
import TableTwo from './examples/component/state_example_two';
import MoneyCalculator from './examples/component/multiple_component_three';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<MyTask label='Coding' />, document.getElementById('root'));
//ReactDOM.render(<TableTwo/>, document.getElementById('root'));
ReactDOM.render(<MoneyCalculator />,document.getElementById('root'));
registerServiceWorker();
