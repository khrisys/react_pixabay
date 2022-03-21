import './App.css';
import React                                from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Counter                              from "./components/Counter";
import About                                from "./components/About";
import Gallery                              from "./components/Gallery";


/**
 * COMPOSANT STATELESS
 * Ce composant est une FONCTION (à la difference du composant Stateful qui est un composant avec une classe)
 *
 * MENU ET ROUTING :
 * Pour disposer de la fonctionnalité, il faut lancer 'npm i --save react-router' et 'npm i --save react-router-dom'
 * Puis declarer les imports 'BrowserRouter, Link, Route, Switch' dans la page
 *
 * @returns {*}
 * @constructor
 */
function App() {

	/*	browserHistory.listen(location => {
	 browserHistory.push('/super/url');
	 });*/


	/*Declaration d'une' constante pour les key des composants*/
	const routs = [
		{path: '/', element: 'todo'},
		{path: '/counter', element: <Counter/>},
		{path: '/about', element: <About/>},
		{path: '/gallery', element: <Gallery/>}
	];

	return (

		<BrowserRouter>
			{/*LINK fournit le lien vers le composant*/}
			<nav className="navbar navbar-expand navbar-brand m-2">
				<ul className="navbar-nav">
					<li key={routs.id} className="nav-link"><Link to="/">Home</Link></li>
					<li key={routs.id} className="nav-link"><Link to="/counter">Counter</Link></li>
					<li key={routs.id} className="nav-link"><Link to="/about">About</Link></li>
					<li key={routs.id} className="nav-link"><Link to="/gallery">Gallery</Link></li>
				</ul>
			</nav>
			{/*SWITCH fournit la route du composant*/}
			<div className="container">
				<Switch>
					<Route exact path="/"></Route>
					<Route path="/counter"><Counter/></Route>
					<Route path="/about" ><About inputMessage="Presentation CV" /></Route>
					<Route path="/gallery"><Gallery/></Route>
					{/*<Route path="/:id"><p>n'importe quelle autre route</p></Route>*/}
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
	);
}

export default App;
