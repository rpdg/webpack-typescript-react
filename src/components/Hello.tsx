import * as React from 'react';


interface HelloProps {
	compiler ?: string;
	framework ?: string;
}

interface HelloStats {
	txt :string ;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, HelloStats> {

	static defaultProps :HelloProps = {
		framework : 'node.js'
	};

	constructor () {
		super();
		this.state = { txt : 'waiting' };
	}

	render() {
		return <h1 className={this.state.txt} onClick={this.handleClick.bind(this , "BMW")}>Hello from {this.props.compiler} and {this.props.framework}! </h1>;
	}

	handleClick(name :string , evt : React.MouseEvent<any>) {
		console.log(this , evt , evt.clientX , name);
		this.setState({
			txt : 'clicked'
		})
	}
}


export enum Frameworks {
	ts = 'TypeScript',
	js = 'JavaScript'
}