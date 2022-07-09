import DonutMaker from "./DonutMaker";

const buttonDonut = document.querySelector('#buttonDonut');
const donutsMade = document.querySelector('#donutsMade');
const autoclickerBtn = document.querySelector('#autoclickerBtn');
const clickerspurchased = document.querySelector('#clickerspurchased');
const multiplierBtn = document.querySelector('#multiplierBtn')
const multiplierspurchased = document.querySelector('#multiplierspurchased');
const MkDonuts = new DonutMaker(0, 0, 100, 0, 10, 1);

buttonDonut.addEventListener('click', ()=> {
MkDonuts.addDonut();
donutsMade.innerText = 'Donuts: ' + MkDonuts.numDonuts;
})

autoclickerBtn.addEventListener('click', ()=> {
  MkDonuts.addAutoclicker();
  clickerspurchased.innerText = 'Autoclickers: ' + MkDonuts.numAutoclickers;
})

multiplierBtn.addEventListener('click', ()=> {
  MkDonuts.addMultiplier();
  multiplierspurchased.innerText = 'Multipliers: ' + MkDonuts.numMultipliers;
})