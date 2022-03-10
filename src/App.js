import './App.css';
import Counter from "./components/Counter";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

/**
 * COMPOSANT  STATELESS CAR C'EST UNE FONCTION qui retourne un rendu (le composant Stateful est un vrai composant avec une classe)
 * @returns {*}
 * @constructor
 */
function App(){
	return (

		//PROPS : transmettre des proprietes au composant Counter
		<div>
			<Counter title="Titre counter" value={1}/>
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
