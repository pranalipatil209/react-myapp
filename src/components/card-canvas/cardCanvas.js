import React from 'react';
import Api from '../../api';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../card/Card';

class cardCanvas extends React.Component {
	render() {
		return(
			<div className="holder">
				<Container fluid={true}>
					<Row>
						{
							Api.all().map(p=>(
								<Card key={p.number} dataProp={p}/>
							))
						}
					</Row>
					<Row>
						{
							Api.all().map(p=>(
								<Card key={p.number} dataProp={p}/>
							))
						}
					</Row>
					<Row>
						{
							Api.all().map(p=>(
								<Card key={p.number} dataProp={p}/>
							))
						}
					</Row>
				</Container>
			</div>
		)
	}
}
export default cardCanvas;
