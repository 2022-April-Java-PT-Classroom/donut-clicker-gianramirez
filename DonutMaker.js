class DonutMaker {

    constructor(numDonuts, numAutoclickers, autoclickerCost, addMultiplier){
        this.numDonuts = numDonuts;
        this.numAutoclickers = numAutoclickers;
        this.autoclickerCost = autoclickerCost;
        this.addMultiplier = addMultiplier;

    }

    addDonut() {
        this.numDonuts += 1;

        if(this.numAutoclickers >=1){
            this.numDonuts += 1
        }
    }

    addAutoclicker() {
        if(this.numDonuts >= 100){
            this.numDonuts -= 100;
            this.numAutoclickers += 1;
        }   

        if(this.numAutoclickers >=1){
            this.autoclickerCost += this.autoclickerCost * 0.1
        }
    }

    addMultiplier() {

    }

    

}

export default DonutMaker;
