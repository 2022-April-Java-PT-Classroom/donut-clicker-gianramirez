class DonutMaker {

    constructor(numDonuts, numAutoclickers, autoclickerCost, numMultipliers, multipliersCost){
        this.numDonuts = numDonuts;
        this.numAutoclickers = numAutoclickers;
        this.autoclickerCost = autoclickerCost;
        this.numMultipliers = numMultipliers;
        this.multipliersCost = multipliersCost;
    }

    addDonut() {
        this.numDonuts += this.numAutoclickers >0 ? 1 * this.numAutoclickers: 1;
        

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
        if(this.numDonuts >= 10) {
            this.numDonuts -= 10;
            this.numMultipliers +=1;
        }

        if(this.numMultipliers >=1){
            this.multipliersCost += this.multipliersCost * 0.1
        }
    }

}


export default DonutMaker;
