import React from 'react';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

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
			<Col md={4} className="show-card">
				<Link to={`/${this.state.data.number}`}>
					<div className="card">
						Name: <h3>{this.state.data.name}</h3>
						Position: {this.state.data.position}
					</div>
				</Link>
			</Col>
		)
	}

}
export default Card;