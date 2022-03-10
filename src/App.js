import './App.css';
import Counter from "./components/Counter";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * COMPOSANT  STATELESS CAR C'EST UNE FONCTION qui retourne un rendu (le composant Stateful est un vrai composant avec une classe)
 * @returns {*}
 * @constructor
 */
function App(){
	return (

		//PROPS : transmettre des proprietes au composant Counter
		<div className="mt-3 m-5">
			<Counter title="Arc en ciel" value={1} image="images/aec.jpg"/>
			<Counter title="Eau mysterieuse" value={2} image="images/eau.jpg"/>
		</div>


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
