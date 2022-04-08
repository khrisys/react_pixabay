import React, {Component} from 'react';
import axios              from "axios";
import {Link}             from "react-router-dom";
import CircularProgress   from "@mui/material/CircularProgress";

class GallerySingle extends Component {


	constructor(props) {
		super(props);
		this.state = {
			api_key: '16870681-fc0731d7d44beb3487658dcec',
			hit: []
		}
	}

	/*
	 CHERCHER A RECUPERER LE ID DEPUIS GALLERY!!!!!!!!!! REACT YOUSSFI 7, A 31 MINUTE*/
	/**
	 * Dès que le composant est chargé, la requete sera envoyé
	 */
	componentDidMount() {
		this.getHit(this.props.match.params.id);
		//this.getHit(15406515320654561)
	}

	/**
	 * Recuperation d'un tableau d'information de la photo selectionnée par son id (nommées 'hits' dans pixabay) depuis pixabay (importer la dependance axios pour les requetes
	 * apres 'npm i --save axios')
	 */
	getHit(id) {
		let url = "https://pixabay.com/api/?key=" + this.state.api_key + "&id=" + id;
		console.log("URL DE REQUETE DETAIL / " + url);
		axios.get(url).then((resp) => {
			this.setState({
				hit: resp.data.hits[0]
			})
		}).catch((err) => {
			console.log(err);
		})
	}

	render() {
		//TEST AU CAS OU IL N'Y AURAIT PAS D'OBJET QUI REMONTE,J'AFFCIHE UN PROGRESSLOADER
		if (this.state.hit.length != 0) {


			return (
				<div className="row">
					{
						<div className="col-auto"
						     key={this.state.hit.id}>
								<div className="card">
									<div className="card-header">{this.state.hit.tags} | <strong>Resolution : </strong>{this.state.hit.imageWidth} x {this.state.hit.imageHeight}</div>
									<div className="card-body"><img alt="Vignette manquante"
									                                src={this.state.hit.largeImageURL}
									/>


									<div className="row">
										<div className="m-1 mb-2"><strong>Auteur : </strong>{this.state.hit.user}</div>
										<div className="col-auto">
											<img height={100} className="fst-italic"
											     src={this.state.hit.userImageURL}
											     alt="Image de l'auteur manquante"/>
										</div>
									</div>

										<div>
											<ul className="nav nav-pills m-2">
												<li className="list-group-item"><b>Views : </b>{this.state.hit.views}</li>
												<li className="list-group-item"><b>Downloads :</b> {this.state.hit.downloads}</li>
												<li className="list-group-item"><b>Likes :</b> {this.state.hit.likes}</li>
											</ul>
										</div>





									</div>
									{/*POUR AFFICHER LE DETAIL D'UNE PHOTO, IL FAUT AJOUTER UNE NVLLE ROUTE DANS 'App.js' ET UTILISER LA BALISE 'LINK'*/}
									<div className="text-center mb-2">
										<Link className="btn btn-primary blockquote"
										      to={'/gallery/'}>Retour à la galerie</Link>
									</div>
								</div>
							</div>
					}
				</div>

			);

		}
		else {
			return <CircularProgress className="text-center"
			                         disableShrink/>
		}
	}
}

export default GallerySingle;
