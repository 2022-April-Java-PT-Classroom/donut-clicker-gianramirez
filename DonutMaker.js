class DonutMaker {

    constructor(numDonuts, numAutoclickers, autoclickerCost){
        this.numDonuts = numDonuts;
        this.numAutoclickers = numAutoclickers;
        this.autoclickerCost = autoclickerCost;
    }

    addDonut() {
        this.numDonuts += 1;

        if(this.numAutoclickers >= 1){
            this.numDonuts++;
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

}

export default DonutMaker;
