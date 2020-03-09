import React from 'react';
import ReactDOM from 'react-dom';
import MortgageCalculator from "mortgage-calculator-react";



class App extends React.Component{
	render(){
		return (
    <div>
        <MortgageCalculator/>
    </div>
			)
	}
}


ReactDOM.render( <App />, document.getElementById('root') );