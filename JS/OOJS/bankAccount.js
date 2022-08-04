class account {
    constructor(agency, number, type, balance){
        this.agency = agency;
        this.number = number;
        this.type = type;
        this._balance = 0;
    }

    get balance(){
        return this._balance;
    }

    set balance(val){
        this._balance = val;
    }

    withdraw(val){
        if(val > this._balance){
            return "Operation denied.";
        }
        this._balance = this._balance - val;
        return this._balance;
    }

    deposite(val){
        this._balance = this._balance + val;
        return this._balance;
    }
};

class checkingAcc extends account{
    constructor(agency, number, creditCard){
        super(agency, number);
        this.type = 'checking';
        this.creditCard = creditCard;
    }

    get creditCard(){
        return this._creditCard;
    }
    set creditCard(val){
        this._creditCard = val;
    }
}

class savingAcc extends account {
    constructor(agency, number){
        super(agency, number);
        this.type = 'savings';
    }
}

class universityAcc extends account{
    constructor(agency, number){
        super(agency, number);
        this.type = 'university';
    }

    withdraw(val){
        if(val > 500){
            return 'Operation denied.';
        }

        this._balance = this._balance - val;
    }
}
