import React, {Component} from 'react';

class SkillForm extends Component {

	/**
	 * On doit declarer le binding de la methode qui appelle une methode d'un autre composant
	 * @param props
	 */
	constructor(props) {
		super(props);
		this.state = {
			skillValue: ''
		};
		this.onAddSkill=this.onAddSkill.bind(this);
	}

	/**
	 * Cette methode semble obligatoire sur un formulaire.
	 *
	 * la methode 'onChange()' recoit automatiquement un param de type 'event'. On met un 'event' sur le composant sur lequel se produit l'evenement.
	 * A partir de 'event, je recupere la valeur de la zone de texte
	 * C'est le TWO-WAY-BINDING
	 */
	onChangeSkill = (event)=>{
		this.setState({
			skillValue: event.target.value
		})
	};

	/**
	 * Récuperation de la valeur de la skill grace à l'event.
	 * On passe le param de la skillValue dans la methode 'onAddNewSkill()' que je recupere dans le composant 'About' (mais ca pourrait etre n'importe quel composant , du
	 * moment que j'y declare 'onAddNewSkill()'), puis je remet la valeur de la skill à vide
	 * NE PAS OUBLIER DE DECLARER LE BINDING DANS LE CONSTRUCTEUR
	 *
	 * event.preventDefault empeche le onSubmit() de se propager lorsque le navigateur envoie la requete. Un onSubmit() dans un formulaire envoie une requete au server et
	 * recharge la page. Si la page complete est redchargée à chaque fois, alors mon ajout de skill ne sera jamais pris en compte. preventDefault empeche ce comportement par
	 * defaut du onSubmit()
	 */
	onAddSkill = (event) => {
		event.preventDefault();
		this.props.onAddNewSkill(this.state.skillValue);
		this.setState({
			skillValue:''
		})
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onAddSkill} >
					<div className="row">
						<div className="col">
							<input name="skill" className="form-control" placeholder="Skill to add" defaultValue={this.state.skillValue} onChange={this.onChangeSkill} />
						</div>
						<div className="col-auto">
							<button className="btn btn-primary" type="submit">Add</button>
						</div>

					</div>
				</form>

			</div>
		);
	}
}

export default SkillForm;
