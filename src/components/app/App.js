import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

class App extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/about'>About</Link></li>
					<li><Link to='/contact'>Contact</Link></li>
				</ul>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/about' component={About}/>
					<Route path='/contact' component={Contact}/>
				</Switch>
			</div>
		)
	}
}
export default App;


//
// class Home extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Home...</h1>
// 			</div>
// 		)
// 	}
// }
//
// class About extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>About...</h1>
// 			</div>
// 		)
// 	}
// }
//
// class Contact extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Contact...</h1>
// 			</div>
// 		)
// 	}
// }

