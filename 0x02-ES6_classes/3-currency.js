export default class Currency{
  constructor(code, name){
    this.code = code;
    this.name = name;
  }
  
  get code(){
      return this._code;
    }

  get name(){
      return this._name;
    }

  set code(code){
        this._code = code;
    }

  set name(name){
    this._name = name;
  }

  /**
   * Creates the full string representation of this Currency.
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}