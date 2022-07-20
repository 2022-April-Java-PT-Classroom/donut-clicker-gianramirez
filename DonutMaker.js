class DonutMaker {



    constructor(numDonuts, numAutoclickers, autoclickerCost, numMultipliers, multipliersCost, clickValue){
        this.numDonuts = numDonuts;
        this.numAutoclickers = numAutoclickers;
        this.autoclickerCost = autoclickerCost;
        this.numMultipliers = numMultipliers;
        this.multipliersCost = 10;
        this.clickValue = 1;
        
    }

    addDonut() {
        this.numDonuts += (Math.round(this.numAutoclickers >0 ? 1 * this.numAutoclickers: 1));
        
    }

    addAutoclicker() {

        if(this.numDonuts >= this.autoclickerCost){
            this.numDonuts -= this.autoclickerCost;
            this.numAutoclickers += 1;
            this.autoclickerCost += this.autoclickerCost * 0.1;

        }   

    } 
    
    addMultiplier() {


        if(this.numDonuts >= this.multipliersCost) {
            this.numDonuts -= this.multipliersCost;
            this.numMultipliers ++;
            this.multipliersCost = (Math.round(this.multipliersCost * 1.1));
            this.clickValue = (Math.pow(1.2, this.numMultipliers));
        }

    }

    resetGame(){
        this.numDonuts = 0;
        this.numAutoclickers = 0;
        this.autoclickerCost = 100;
        this.multipliersCost = 10;
        this.numMultipliers = 0;
    }

}


export default DonutMaker;
