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
        this.numDonuts += this.numAutoclickers >0 ? 1 * this.numAutoclickers: 1;
        
        
        // if (this.numMultipliers > 0 ){
        //     1 * this.numMultipliers
        // } else this.numDonuts += 1;
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


        if(this.numDonuts >= this.multipliersCost) {
            this.numDonuts -= this.multipliersCost;
            this.numMultipliers ++;
            this.multipliersCost = (this.multipliersCost * 1.1);
            this.clickValue = (Math.pow(1.2, this.numMultipliers));
        }

        // if (this.clickValue > 1) {
        //     this.numDonuts += (1 + this.clickValue);
        // }

    }

}


export default DonutMaker;
