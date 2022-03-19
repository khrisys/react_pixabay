import React, {Component} from 'react';


/**
 * COMPOSANT STATEFUL qui etend le composant principal "Component"
 * A la difference d'une fonction, une classe permet de definir des variables stateful(this.state.*)
 *
 * Si l'error "buffer is not define" apparait, importer la classe Buffer
 * @url : https://stackoverflow.com/questions/67804053/uncaught-referenceerror-buffer-is-not-defined-in-react
 */
class Counter extends Component {

	photo = "images/aec.jpg";
	title = "titre par défaut dans la page";
	desc = "photo manquante";

	/**
	 * Constructeur permet de definir les var stateful. Ce sont les memes variables que les props, mais elles sont stateful
	 * Super{props} permet d'heriter les props de toute l'appli. Il est herité du composant principal "Component"
	 * @param props
	 */
	constructor(props) {
		super(props);
		this.state = {
			counter: 1,
			list: [0]
		}
	}

	/**
	 * Indrémentation et décrémentation des photos
	 *Signature :  "declaration de la fonction" = "lambda function (ici, avec param 'op')"
	 *
	 * On ne peut changer la valeur d'un state uniquement qu'à l'interieur de la function "setState()". On met des accolades dans la methode car on manipule du js
	 * @param op
	 */
	incremen = (op) => {
		let c = this.state.counter;
		if (op === "+")
			c += 1;
		else if (op === "-") c -= 1;
		/*Controle pour ne pas renter une valeur negative dans le tableau 'list'*/
		if (c <= 0 && op === '-') {
			c = 0;
		}

		/*Remplissage d'un tableau*/
		this.setState({
			counter: c,
			list: new Array(c).fill(0)
		});
	};

	/**
	 * RENDU DU COMPOSANT
	 * @returns {*}
	 * @url : https://reactjs.org/docs/lists-and-keys.html#keys
	 */
	render() {
		const photo = this.props.photo;
		const desc = this.props.desc;


		return (

			<div className="card">
				{/*<BasicRating />*/}
				{/*		<Button variant="outlined">Primary</Button>
				 <Button variant="outlined" disabled>
				 Disabled
				 </Button>
				 <Button variant="outlined" href="#outlined-buttons">
				 Link
				 </Button>*/}


				{/*Afficher le titre avec les PROPRIETES*/}
				<div className="card-header"><strong>{this.props.title ? this.props.title : this.title} : {this.state.counter}</strong></div>
				<div>
					<button onClick={() => this.incremen('+')} className="btn btn-info m-1">+</button>
					<button onClick={() => this.incremen('-')} className="btn btn-info right">-</button>
				</div>
				{/*AFFICHAGE D'UNE LISTE*/}
				{/*A l'interieur de la fonction map, appeler une lambda (avec valeur et index)
				 Definir un index dans la function map et s'en servir de "key" afin de bien specifier chaque element de, la liste*/}
				<div className="card-body">
					{this.state.list.map((v, index) =>
						<span key={index} className="fw-bold">{index}
							<img className="m-1"  width={100} src={photo ? this.props.photo : this.photo} alt={desc ? this.props.desc : this.desc}/>
						</span>
					)}
				</div>
			</div>

		);
	}
}

export default Counter;


