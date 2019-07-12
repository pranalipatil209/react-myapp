import React from 'react';
import Api from '../../api';

class cardCanvas extends React.Component {
	constructor(props){
		super(props);
		this.user = Api.get(parseInt(props.match.params.name, 10));
	}
	render() {
		return(
			<div className="user-info">
				<h1>Name: {this.user.name}</h1>
				<h3>Number: {this.user.number}</h3>
				<h3>Position: {this.user.position}</h3>
			</div>
		)
	}
}
export default cardCanvas;
