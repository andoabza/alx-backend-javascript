import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency){
		if (typeof amount !== 'number') throw TypeError('Amount must be a number');
		
		if (!(currency instanceof Currency)) throw TypeError('Currency must be a Currency object');
		
		this.amount = amount;
		this.currency = currency;
  }

	get amount(){
		return this._amount;
	}

	get currency(){
		return this._currency;
	}

	set amount(value){
		if (typeof amount !== 'number') throw TypeError('Amount must be a number');
		
		this._amount = value;
	}

	set currency(value){
		if (!(currency instanceof Currency)) throw TypeError('Currency must be a Currency object');
		
		this._currency = value;
	}

	displayFullPrice(){
		return `${this.amount} ${this.currency.name} (${this.currency.code})`;
	}

	convertPrice(amount, conversionRate){
		return this.amount * this.conversionRate;
	}

}
