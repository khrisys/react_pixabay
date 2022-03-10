import React, {Component} from 'react';

class Counter extends Component {

	/**
	 * Permet de recevoir les proprietes depuis ailleurs dans l'(appli
	 * Super permet d'heriter de la classe Component
	 * @param props
	 */
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="card">
				<div className="card-header">{this.props.title}
					<div className="card-body">Texte</div>
				</div>
			</div>
		);
	}
}

Counter.propTypes = {};

export default Counter;


