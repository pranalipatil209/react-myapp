import React from 'react';
class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.dataProp
		};
	}
	render()
	{
		return (
			<div className="show-card">
				Name: <h3>{this.state.data.name}</h3>
				Position: {this.state.data.position}
			</div>
		)
	}

}
export default Card;