import DonutMaker from "./DonutMaker";

const buttonDonut = document.querySelector('#buttonDonut');
const donutsMade = document.querySelector('#donutsMade');
const autoclickerBtn = document.querySelector('#autoclickerBtn');
const clickerspurchased = document.querySelector('#clickerspurchased');
const clickerCost = document.querySelector('#clickerCost');
const multiplierBtn = document.querySelector('#multiplierBtn');
const multiplierspurchased = document.querySelector('#multiplierspurchased');
const multiplierCost = document.querySelector('#multiplierCost');
const MkDonuts = new DonutMaker(0, 0, 100, 0, 10, 1);
updateCounts();

buttonDonut.addEventListener('click', ()=> {
MkDonuts.addDonut();
updateCounts();
})

autoclickerBtn.addEventListener('click', ()=> {
  MkDonuts.addAutoclicker();
  setInterval(autoClick, 1000);
  updateCounts();
})

multiplierBtn.addEventListener('click', ()=> {
  MkDonuts.addMultiplier();
  updateCounts();
})

function autoClick(){
  MkDonuts.numDonuts += (MkDonuts.numAutoclickers * 1);
  updateCounts();
}

function updateCounts() {
  donutsMade.innerText = 'Donuts: ' + MkDonuts.numDonuts;
  clickerspurchased.innerText = 'Autoclickers: ' + MkDonuts.numAutoclickers;
  clickerCost.innerText = 'Autoclicker Cost: ' + MkDonuts.autoclickerCost;
  multiplierspurchased.innerText = 'Multipliers: ' + MkDonuts.numMultipliers;
  multiplierCost.innerText = 'Multiplier Cost: ' + MkDonuts.multipliersCost;

};