import DonutMaker from "./DonutMaker";

// const container = (document.querySelector('.container').innerText =
//   'mmmmmmmmm doughnuts.... ahhhhhhh!');

renderPage();

function renderPage(){
  addDonut;
}

const MakingDonut = new DonutMaker(0, 0, 100, 0, 10, 1);


function addDonut(){
  const DonutBtn = document.querySelector('#button-donut');
  const buyAutoClicker = document.querySelector('#autoclicker')
  const buyMultiplier = document.querySelector('#clickmultipliers')

  DonutBtn.addEventListener('click', ()=> {
    MakingDonut.addDonut();
  })

  buyAutoClicker.addEventListener('click', ()=> {
    MakingDonut.addAutoclicker();
  })


}

