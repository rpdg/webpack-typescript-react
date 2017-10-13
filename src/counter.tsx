import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

//import {Hello, Frameworks} from './components/Hello';
import Counter from './components/Counter';

//import {Button} from 'antd-mobile';

let store = createStore(
	(state, action) => {
		switch (action.type) {
			case 'INCR':
				return {counter: state.counter + action.by};
			default:
				return state;
		}
	},
	{counter: 0},
);

ReactDOM.render(
	//<Hello compiler={Frameworks.ts} framework="React" />,
	<Provider store={store}>
		<Counter />
	</Provider>,
	//<Button>aaa</Button>,
	document.getElementById('example'),
);