import React, {Component} from 'react';

/**
 * COMPOSANT STATEFUL qui etend le composant principal "Component"
 */
class Counter extends Component {

	/**
	 * Permet de recevoir les proprietes depuis ailleurs dans l'(appli
	 * Super permet d'heriter de la classe Component
	 * @param props
	 */
/*	constructor(props) {
		super(props);
	}*/

	/**
	 * RENDU DU COMPOSANT
	 * @returns {*}
	 */
	render() {
		return (
			<div className="card">
				{/*Afficher le titre avec les PROPRIETES*/}
				<div className="card-header">{this.props.title} : {this.props.value}
					<div className="card-body">{this.props.image}</div>
				</div>
			</div>
		);
	}
}

Counter.propTypes = {};

export default Counter;


