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

buttonDonut.addEventListener('click', ()=> {
MkDonuts.addDonut();
donutsMade.innerText = 'Donuts: ' + MkDonuts.numDonuts;
})

autoclickerBtn.addEventListener('click', ()=> {
  MkDonuts.addAutoclicker();
  clickerspurchased.innerText = 'Autoclickers: ' + MkDonuts.numAutoclickers;
  clickerCost.innerText = 'Autoclicker Cost: ' + MkDonuts.autoclickerCost;
})

multiplierBtn.addEventListener('click', ()=> {
  MkDonuts.addMultiplier();
  multiplierspurchased.innerText = 'Multipliers: ' + MkDonuts.numMultipliers;
  multiplierCost.innerText = 'Multiplier Cost: ' + MkDonuts.multipliersCost;
})