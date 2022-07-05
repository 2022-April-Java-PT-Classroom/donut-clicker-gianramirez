class DonutMaker {

    constructor(numDonuts, numAutoclickers, autoclickerCost, numMultipliers, clickCount){
        this.numDonuts = numDonuts;
        this.numAutoclickers = numAutoclickers;
        this.autoclickerCost = autoclickerCost;
        this.numMultipliers = this.numMultipliers;
        this.clickCount = this.clickCount;
    }

    addDonut() {
        this.numDonuts += 1;

        // if(this.numAutoclickers >= 1){
        //     this.numDonuts++;
        // }
        
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
        this.numMultipliers 
    }

}

export default DonutMaker;
