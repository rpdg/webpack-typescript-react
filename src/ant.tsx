import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Hello, Frameworks} from './components/Hello';


ReactDOM.render(
	<Hello compiler={Frameworks.ts} framework="React" />,
	document.getElementById('example'),
);