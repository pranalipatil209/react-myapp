import React from 'react';
import Api from '../../api';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../card/Card';
// import { Switch, Route, Link } from 'react-router-dom'

class Home extends React.Component {
	render() {
		return(
			<div>
				<Container fluid={true}>
					<Row>
						{/*<Col>Hiee</Col>*/}
						{/*<Col>Hiee</Col>*/}
						{/*<Col>Hiee</Col>*/}
						{
							Api.all().map(p=>(
								<Col md={4}>
									<Card dataProp={p} />
								</Col>
							))
						}
					</Row>
				</Container>
			</div>
		)
	}
}
export default Home;
