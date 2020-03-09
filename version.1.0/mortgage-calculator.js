
//Formula: c =( (p * r) * Math.pow((1 + r), n) ) / ( Math.pow( (1 + r), n ) - 1);
//Algorithm for Mortgages
// @param p float Ammount bottowed
// @param r interest as a percentage
// @param n term in years  
function calculateMortgage(p, r, n){
	// convert this percentage to a decimal
	var r = percentToDecimal(r);
	// convert years to months
	var n = yearsToMonths(n);

	var payment = ( (p * r) * Math.pow((1 + r), n) ) / ( Math.pow( (1 + r), n ) - 1);
	
	return payment;
};


function percentToDecimal(percent){
	return (percent / 12) / 100; 
}

function yearsToMonths(year){
	return year * 12;
}

function postPayments(payment){
	htmlEL = document.getElementById('totalMonthlyPayment');

	htmlEL.innerText = "$" + payment; 
}

var btn = document.getElementById("btnCalculate");
btn.onclick = function(){
	var homeListingAmmount = document.getElementById('homeListingAmmount').value;

	if( homeListingAmmount < 0){
		alert('Invalad Cost');
		return false;
	}

	if( homeListingAmmount == '' ){
		alert('Please enter the price of the listing');
	}
	var downPayment = document.getElementById('downPayment').value;
	var interestRate = document.getElementById('interestRate').value;
	var loanTerm = document.getElementById('loanTerm').value;

	//console.log(homeListingAmmount, downPayment, interestRate, loanTerm)

	var loanAmmount = homeListingAmmount - downPayment;

	var payment = calculateMortgage(loanAmmount, interestRate, loanTerm);
	//console.log(payment);
	postPayments(payment);
}

