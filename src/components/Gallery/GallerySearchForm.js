import React, {Component} from 'react';

class GallerySearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keywordForm: ''
		};

		this.onSubmitResearch=this.onSubmitResearch.bind(this);
	}

	onChangeKeyword = (event) => {
		this.setState({
			keywordForm: event.target.value
		})
	};

	/**
	 * Envoi du mot clef de recherche vers le composant Gallery
	 * La methode qui servira à passer le param est sendKeyword = à declarer dans le composant Gallery, et le lier ici dans le constructeur
	 * @param event
	 */
	onSubmitResearch = (event) => {
		event.preventDefault();
		this.props.sendKeyword(this.state.keywordForm);
		this.setState({
			keywordForm:''
		})
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
							       value={this.state.keywordForm}/>
						</div>
						<div className="col-auto">
							<button className="btn btn-primary"
							        type="submit">Chercher</button>
						</div>
					</div>
				</form>
   </div>
		);
	}
}

export default GallerySearchForm;
