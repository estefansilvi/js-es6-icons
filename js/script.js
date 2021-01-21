
/*
Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
- Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.
*/
const icons = [
  {
    nome:'cat',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'animali'
  },
  {
    nome:'crow',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'animali'
  },
  {
    nome:'dog',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'animali'
  },
  {
    nome:'dove',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'animali'
  },
  {
    nome:'dragon',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'animali'
  },
  {
    nome:'horse',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'animali'
  },
  {
    nome:'hippo',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'animali'
  },
  {
    nome:'fish',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'animali'
  },
  {
    nome:'carrot',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'frutta'
  },
  {
    nome:'apple-alt',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'frutta'
  },
  {
    nome:'lemon',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'frutta'
  },
  {
    nome:'pepper-hot',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'frutta'
  },
  {
    nome:'user-astronaut',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'mestieri'
  },
  {
    nome:'user-graduate',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'mestieri'
  },
  {
    nome:'user-ninja',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'mestieri'
  },
  {
    nome:'user-secret',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'mestieri'
  }
];


const containerIcons = $('#container');
icons.forEach((element) => {
    const newHTML = `
    <div>
      <i id="${element.nome}" class="${element.famiglia} ${element.prefisso}${element.nome}"></i>
      <div class="title">${element.nome.toUpperCase()}</div>
    </div>
    `
    containerIcons.append(newHTML);
});

console.log('ciao')
/*
Milestone 2:
- Definire un array di colori e associare ad ogni tipo di icona un colore.
- Visualizzare le icone di colore diverso in base al tipo.
*/


const colorList = ['blue', 'orange','violet'];
const container = document.getElementsByClassName('container')[0];

let familyColor;
icons.forEach((element)=>{
  if (element.tipo === 'animali'){
    familyColor= colorList[0];
  }else if (element.tipo === 'frutta'){
    familyColor= colorList[1];
  } else{
    familyColor= colorList[2];
  }

 $(`#${element.nome}`).addClass(familyColor);

})
