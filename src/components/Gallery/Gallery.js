import React, {Component} from 'react';
import axios              from 'axios/index';
import GalleryDetails     from "./GalleryDetails";
import GallerySearchForm  from "./GallerySearchForm";

class Gallery extends Component {

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
			keywordForm: 'paris',
			currentPage: 1,
			totalPages: 1,
			nbPages: []
		};
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
		let url = "https://pixabay.com/api/?key=" + this.state.api_key + "&q=" + this.state.keywordForm + "&per_page=" + this.state.pixs_per_page + "&page=" + this.state.currentPage;
		console.log("URL DE REQUETE GENERALE / " + url);
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


	/**
	 * TWO WAY BINDING : la valeur de la zone de texte va vers le state > A chaque fois que le state change, il s'affiche dans la zone de texte (Le champ est controlé par React)
	 *
	 * event.preventDefault() intercepte l'evenement et stoppe l'evenement à ce niveau, il l'empeche de se propager. Autrement dit,on ne fait ici que l'appel de 'this.getHits()'
	 * sans que le browser ne soit atteint et rafraichisse la page entiere, remettant par defaut le mot clef defini dans le constructeur.
	 *
	 * Appeler la fonction getHits() dans el callback, sinon elle ne sera pas executée de maniere synchrone, le setState etant async par defaut
	 * @param keyword mot-clef
	 */
	sendKeyword = (keyword) => {
		this.setState({
			keywordForm: keyword
		}, () => {
			this.getHits();
		});

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


	render() {
		return <div>


			<div>
					<ul className="nav nav-pills">
						{this.state.nbPages.map((page, index) =>
							<button key={index + 1}
							        className={this.state.currentPage === index + 1 ? 'btn btn-primary' : 'btn'}

							        onClick={() => this.onClickPagination(index + 1)}>{index + 1}</button>
						)}
					</ul>
				</div>

			<GallerySearchForm sendKeyword={this.sendKeyword}/>


				<div className="row">
					{
						this.state.hits.map((hit, index) =>

							<GalleryDetails key={index}
							                hit={hit} />
						)
					}
				</div>
			</div>;
	}


}

export default Gallery;
