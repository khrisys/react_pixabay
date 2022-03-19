import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Counter from "./components/Counter";
import About from "./components/About";


/**
 * COMPOSANT  STATELESS CAR C'EST UNE FONCTION qui retourne un rendu (le composant Stateful est un composant avec une classe)
 *
 * Pour disposer de la fonctionnalité, il faut lancer 'npm i --save react-router' (et 'npm i --save react-router-dom')
 *
 * @returns {*}
 * @constructor
 */
function App() {


	/*	browserHistory.listen(location => {
	 browserHistory.push('/super/url');
	 });*/
		const routs=[
	 {path:'/home', element:<App/>},
	 {path:'/counter', element:<Counter/>},
	 {path:'/about', element:<About/>},
	 {path:'/gallery', element:'gallery'}
	 ];


	/*	const routs = (
	 <BrowserRouter>
	 <div>
	 <Route exact path="/"  element={App} />
	 <Route path="/counter" element={Counter} />
	 <Route path="/about" element={About} />
	 </div>
	 </BrowserRouter>
	 );*/

	return (

		<BrowserRouter>

			<nav className="navbar navbar-expand">
				<ul className="navbar-nav">
					<li key={routs.id} className="nav-link"><Link to="/home">Home</Link></li>
					<li key={routs.id} className="nav-link"><Link to="/counter">Counter</Link></li>
					<li key={routs.id} className="nav-link"><Link to="/about">About</Link></li>
					<li key={routs.id} className="nav-link"><Link to="/gallery">Gallery</Link></li>
				</ul>
			</nav>

			<div className="container">
				<Switch>
					<Route path="/home"><App/></Route>
					<Route path="/counter"><Counter/></Route>
					<Route path="/about"><About/></Route>
					<Route path="/:id"><p>n'importe quelle autre route</p></Route>
				</Switch>
			</div>
		</BrowserRouter>

		/*	{		<div>
		 <About inputMessage="Bimbo le bozo" />


		 PROPS : transmettre des proprietes au composant Counter
		 <div className="mt-3 m-5">
		 <Counter title="Arc en ciel" value={51} photo="images/aec.jpg" desc="aec"/>
		 <Counter title="Eau mysterieuse" value={2} photo="images/eau.jpg" desc="eau mysterieuse"/>
		 <Counter title="Test desc balise" value={3} photo="" desc="texte en cas de non affichage d'image"/>
		 </div>
		 </div>
		 }*/


		/*		<div className="App">
		 <header className="App-header">
		 <img src={logo} className="App-logo" alt="logo"/>
		 <p>
		 Edit <code>src/App.js</code> and save to reload.
		 </p>
		 <a
		 className="App-link"
		 href="https://reactjs.org"
		 target="_blank"
		 rel="noopener noreferrer"
		 >
		 Learn React
		 </a>
		 </header>
		 </div>*/
	)
		;
}

export default App;
