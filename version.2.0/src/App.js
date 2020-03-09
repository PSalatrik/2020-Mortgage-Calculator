import React from 'react';
import InputDetail from './components/InputDetail';


class App extends React.Component {
	
	render(){
		return (
			<div className="ui container">
				<h1>Mortgage Calculator</h1>
				<InputDetail />
			</div>

		)
	}
};

export default App;