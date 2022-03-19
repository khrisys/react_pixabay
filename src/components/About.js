import React, {Component} from 'react';

class About extends Component {

	constructor(props) {
		super(props);
		this.state = {
			contact: {
				name: 'Kiki', email: 'kiki@kiki.fr', picture: './images/sleepy-cat.jpg'
			},
			skills: [
				{id: 1, title: 'java'},
				{id: 2, title: 'react'},
				{id: 3, title: 'angular'},
				{id: 4, title: 'flutter'}
			]
		}
	}

	render() {
		return (
			<div className="card">
				<label><b>{this.props.inputMessage} </b></label>
				<img width={120} src="./images/sleepy-cat.jpg" className="profile img-thumbnail" alt="Profil"/>
				<ul>
					<li><b>Nom : </b>{this.state.contact.name}</li>
					<li><b>Email : </b>{this.state.contact.email}</li>
				</ul>
				<table>
					<thead className="card-header">
					<tr>
						<th>ID</th>
						<th>Title</th>
					</tr>
					</thead>
					<tbody className="card-body">
					{this.state.skills.map((v, index) =>
						<tr key={v.id}>
							<td>{this.state.skills.id}</td>
							<td>{this.state.skills.title}</td>
							<td>
								<button aria-valuetext="X" onClick={() => this.onDel(index)}/>
							</td>
						</tr>
					)}
					</tbody>
				</table>
			</div>
		);
	}

	onDel(index) {
		
	}
}

export default About;
