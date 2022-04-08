import React, {Component} from 'react';

class Home extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div>
      <header className="App-header">
	      <h1>React</h1>
        <img src="./images/logo.svg"
             className="App-logo m-4"
             alt="logo"/>

      </header>
    </div>
		);
	}
}

export default Home;
