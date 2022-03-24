import React, {Component} from 'react';
import axios              from 'axios';

class Gallery extends Component {


	const;

	/**
	 * Initialisation des variables utiles à l'ffichage des photos de pixabay. Ici, je mets des valeurs par defaut plutot que rien
	 * @param props
	 */
	constructor(props) {
		super(props);
		this.state = {
			hits: [],
			api_key: '16870681-fc0731d7d44beb3487658dcec',
			pixs_per_page: 9,
			keyword: 'paris',
			currentPage: 1,
			totalPages: 1,
			nbPages: []
		}
	}

	/**
	 * Une fois que le composant est chargé, j'envoie la requete pour recuperer les photos.Ceci provoquera donc un comprtement par defaut
	 */
	componentDidMount() {
		this.getHits();
	}

	/**
	 * Recuperation des photos (nommées 'hits' dans pixabay) depuis pixabay (importer la dependance axios pour les requetes apres 'npm i --save axios')
	 */
	getHits() {
		let url = "https://pixabay.com/api/?key=" + this.state.api_key + "&q=" + this.state.keyword + "&per_page=" + this.state.pixs_per_page + "&page=" + this.state.currentPage;
		console.log("URL DE REQUETE / " + url);
		axios.get(url).then((resp) => {
			let totalPages = (resp.data.totalHits % this.state.pixs_per_page === 0) ? resp.data.totalHits / this.state.pixs_per_page : Math.ceil(resp.data.totalHits / this.state.pixs_per_page);
			this.setState({
				hits: resp.data.hits,
				totalPages: totalPages,
				nbPages: new Array(totalPages).fill(0)
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
	onSubmitResearch = (event) => {
		event.preventDefault();
		this.getHits();
	};

	/**
	 * Navigation via la pagination
	 * Dans cette methode,on passe l'appel vers l'api pixabay en 2e param. La methode setState etant async, si on met setState() en dehors de setState, getHits() sera appelé
	 * avant que 'currentPage' soit mis à jour.
	 *
	 *ATTENTION : dans le html, à l'appel de onClickPagination, utiliser une fonction lambda pour appeler onClickPagination()
	 **/
	onClickPagination = (index) => {
		this.setState({
			currentPage: index
		}, () => {
			this.getHits();
		});
	};

	handleChange = (event, value) => {
		this.setState({
			currentPage: value
		})
	};


	render() {
		return <div>
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
							<button className="btn btn-primary"
							        type="submit">Chercher</button>
						</div>
					</div>
				</form>

			<div>
					<ul className="nav nav-pills">
						{this.state.nbPages.map((page, index) =>
							<button key={index + 1}
							        className={this.state.currentPage === index + 1 ? 'btn btn-primary' : 'btn'}
								/*ONCLICK PREND ICI UNE FONCTION ANONYME EN PARAM, QUI APPELLE ALORS ONCLICKPAGINATION()*/
								    onClick={() => this.onClickPagination(index + 1)}>{index + 1}</button>
						)}
					</ul>
				</div>
				<div className="row">
					{
						this.state.hits.map((hit, index) =>
							<div className="col-md-4"
							     key={index}>
								<div className="card">
									<div className="card-header">{hit.tags} | <strong>Resolution : </strong>{hit.webformatWidth} x {hit.webformatHeight}</div>
									<div className="card-body"><img alt="Vignette manquante"
									                                className="card-img"
									                                height={200}
									                                src={hit.webformatURL}
									/></div>
								</div>
							</div>
						)
					}
				</div>


			{/*<Pagination count={this.state.totalPages}
			 showFirstButton
			 showLastButton
			 variant="outlined"
			 color="primary"
			 size="small"
			 onChange={this.handleChange}
			 page={this.state.currentPage}
			 defaultPage={4}
			 />*/}


			<div>
			 <ul className="nav nav-pills m-1">
			 {this.state.nbPages.map((page, index) =>
				 <button key={index + 1}
				         className={this.state.currentPage === index + 1 ? 'btn btn-primary' : 'btn btn-link'}
					 /*ONCLICK PREND ICI UNE FONCTION ANONYME EN PARAM, QUI APPELLE ALORS ONCLICKPAGINATION()*/
					     onClick={() => this.onClickPagination(index + 1)}>{index + 1}</button>
			 )}
			 </ul>
			 </div>
			</div>;
	}
}

export default Gallery;
