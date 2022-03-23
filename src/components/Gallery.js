import React, {Component} from 'react';
import axios              from 'axios';

class Gallery extends Component {



	/**
	 * Initialisation des variables utiles à l'ffichage des photos de pixabay. Ici, je mets des valeurs par defaut plutot que rien
	 * @param props
	 */
	constructor(props) {
		super(props);
		this.state = {
			hits: [],
			currentPage: 1,
			api_key: '16870681-fc0731d7d44beb3487658dcec',
			pixs_per_page: 8,
			keyword: 'millau'
		}
	}

	/**
	 * UNe fois que le composant est chargé, j'envoie la requete pour recuperer les photos
	 */
	componentDidMount() {
		this.getHits();
	}

	/**
	 * Recuperation des photos (nommées 'hits' dans pixabay) depuis pixabay (importer la dependance axios pour les requetes apres 'npm i --save axios')
	 */
	getHits() {
		let url = "https://pixabay.com/api/?key=16870681-fc0731d7d44beb3487658dcec&q="+this.state.keyword+"&per_page="+this.state.pixs_per_page;
		console.log("URL DE REQUETE / " + url);
		axios.get(url).then((resp) => {
			this.setState({
				hits: resp.data.hits
			})
		}).catch((err) => {
			console.log(err);
		})
	}

	onChangeKeyword = (event) => {
		this.setState({
			keyword: event.target.value
		})
	};

	/**
	 * TWO WAY BINDING : la valeur de la zone de texte va vers le state > A chaque fois que le state change, il s'affiche dans la zone de texte (Le champ est controlé par React)
	 *
	 * event.preventDefault() intercepte l'evenement et stoppe l'evenement à ce niveau, il l'empeche de se propager. Autrement dit,on ne fait ici que l'appel de 'this.getHits()'
	 * sans que le browser ne soit atteint et rafraichisse la page entiere, remettant par defaut le mot clef defini dans le constructeur.
	 * @param event
	 */
	onSubmitResearch = (event) =>{
		event.preventDefault();
		this.getHits();
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmitResearch}>
					<div className="row m-2 p-2">
						<div className="col">
							<input type="text"
							       className="form-control"
							       placeholder="keyword"
							       onChange={this.onChangeKeyword}
							       value={this.state.keyword}/>
						</div>
						<div className="col-auto">
							<button className="btn btn-primary" type="submit">Chercher</button>
						</div>
					</div>
				</form>
				<div className="row">
					{
						this.state.hits.map((hit, index) =>
							<div className="col-md-4"
							     key={index}>
								<div className="card">
									<div className="card-header">{hit.tags} | <strong>Resolution : </strong>{hit.webformatWidth} x {hit.webformatHeight}</div>
									<div className="card-body"><img className="card-img"
									                                height={300}
									                                src={hit.webformatURL}
									                                alt="Photo manquante"/></div>
								</div>
							</div>
						)
					}
				</div>
			</div>
		);
	}
}

export default Gallery;
