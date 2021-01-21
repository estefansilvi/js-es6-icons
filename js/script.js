
/*
Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
- Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.
*/
const icons = [
  {
    nome:'CAT',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'animali'
  },
  {
    nome:'DROW',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'animali'
  },
  {
    nome:'DOG',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'animali'
  },
  {
    nome:'DOVE',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'animali'
  },
  {
    nome:'DRAGON',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'animali'
  },
  {
    nome:'HORSE',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'animali'
  },
  {
    nome:'HIPPO',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'animali'
  },
  {
    nome:'FISH',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'animali'
  },
  {
    nome:'CARROT',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'frutta'
  },
  {
    nome:'APPLE-ALT',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'frutta'
  },
  {
    nome:'LEMON',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'frutta'
  },
  {
    nome:'PEPPER-HOT',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'frutta'
  },
  {
    nome:'USER-ASTRONAUT',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'mestieri'
  },
  {
    nome:'USER-GRADUATE',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'mestieri'
  },
  {
    nome:'USER-NINJA',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'mestieri'
  },
  {
    nome:'USER-SECRET',
    prefisso:'fa-',
    famiglia:'fas',
    tipo:'mestieri'
  }
];


const containerIcons = document.getElementById('container');

icons.forEach((element) => {

    containerIcons.innerHTML +=`
    <div>
    <i class="fas  ></i>

    <i class="fas fa-crow" ></i>

    <i class="fas fa-dog" ></i>

    <i class="fas fa-dove" ></i>

    <i class="fas fa-dragon" ></i>

    <i class="fas fa-horse" ></i>

    <i class="fas fa-hippo" ></i>

    <i class="fas fa-fish" ></i>

    <i class="fas fa-carrot" ></i>

    <i class="fas fa-apple-alt" ></i>

    <i class="fas fa-lemon" ></i>

    <i class="fas fa-pepper-hot" ></i>

    <i class="fas fa-user-astonaut"  ></i>
    ${element.nome}
    </div>

    `
});
