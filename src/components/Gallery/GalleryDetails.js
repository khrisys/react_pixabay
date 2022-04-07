import React, {Component} from 'react';
import {Link}             from "react-router-dom";

/**
 * Affichage de toutes les photos d'une requete (ce n'est pas le detail de chaque photo)
 */
class GalleryDetails extends Component {

	constructor(props) {
		super(props);
		this.state = {
			api_key: '16870681-fc0731d7d44beb3487658dcec',
			hit: null,
			id: ''
		}
	}


	render() {
		return (
			<div className="row">
					{
						<div className="col-md-4"
						     key={this.props.hit.id}>
								<div className="card">
									<div className="card-header">{this.props.tags} | <strong>Resolution : </strong>{this.props.hit.webformatWidth} x {this.props.hit.webformatHeight}</div>
									<div className="card-body"><img alt="Vignette manquante"
									                                className="card-img"
									                                height={200}
									                                src={this.props.hit.webformatURL}
									/>
									</div>
									{/*POUR AFFICHER LE DETAIL D'UNE PHOTO, IL FAUT AJOUTER UNE NVLLE ROUTE DANS 'App.js' ET UTILISER LA BALISE 'LINK'*/}
									<div className="text-center mb-2">
										<Link className="btn btn-success"
										      to={'/detail/' + this.props.hit.id}>Detail de la photo</Link>
									</div>
								</div>
							</div>
					}
				</div>
		);
	}
}

export default GalleryDetails;
