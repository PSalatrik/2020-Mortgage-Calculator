import React from 'react';


class InputDetail extends React.Component {
	
	state = { 
		price: '',
		downPayment: '',
		interest: '',
		years: '',
		payment: '',
		errorMessage: '' 
} 

	onInputChange = (event) => {
		this.setState({
		[event.target.name]: event.target.value,
	 });
	}

	onFormSubmit = (event) =>{
		event.preventDefault();
	}

	calculateMortgage = (p,r,n) =>{
			r = this.percentToDecimal(r);
			n = this.yearsToMonths(n);

			var payment = ( r * p ) / (1 - ( Math.pow( ( 1 + r ), ( -n ) ) ));

			return  parseFloat( payment.toFixed(2) );
			}
			
			percentToDecimal = (percent) =>{
				return (percent / 12) / 100; 
			}

			yearsToMonths = (year) =>{
				return year * 12;
			}

	onButtonClick = (event) => {
		event.preventDefault();
			var homeListingAmmount = this.state.price;
			var downPayment = this.state.downPayment;
			var interestRate = this.state.interest;
			var loanTerm = this.state.years;

			var loanAmmount = homeListingAmmount - downPayment;

			var monthlyPayment =  this.calculateMortgage(loanAmmount, interestRate, loanTerm);

			this.setState( {payment: monthlyPayment });

			this.sanatizeInput();

		}

		sanatizeInput = (event) => {
			//enter code here to sanatize inputs and return error message
		}


	render(){


		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Price</label>
						<input type="text" pattern="[0-9]*" name='price' value={this.state.price} onChange={this.onInputChange} />
						<label>Down Payment</label>
						<input type="text" pattern="[0-9]*" name='downPayment' value={this.state.downPayment} onChange={this.onInputChange} />						
						<label>Interest</label>
						<input type="text" pattern="[0-9]*" name='interest' value={this.state.interest} onChange={this.onInputChange} />
						<label>Years</label>
						<input type="text" pattern="[0-9]*" name='years' value={this.state.years} onChange={this.onInputChange} />
						<div className="ui segment">
							<button onClick={this.onButtonClick} className='ui button'>Calculate Payment</button>
						</div>
					</div>
				</form>
					<div className="ui segment">Total Monthly Payment: $ {this.state.payment}</div>
			</div>

			);
	}
}

export default InputDetail;

