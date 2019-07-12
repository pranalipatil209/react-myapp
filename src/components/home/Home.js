import React from 'react';
import { Switch, Route } from 'react-router-dom';
import cardCanvas from '../card-canvas/cardCanvas';
import singleCard from '../single-card/singleCard';

class Home extends React.Component {
	render() {
		return(
			<div>
				<Switch>
					<Route exact path='/' component={cardCanvas}/>
					<Route exact path='/:name' component={singleCard}/>
				</Switch>
			</div>
		)
	}
}
export default Home;
