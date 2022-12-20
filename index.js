// const arrayNum = [1, 2, 3, 4, 5];

// const arrayNumMult = arrayNum.map((num) => num * 10);

// const arrayMulti = [];

// arrayNum.forEach((nuns) => arrayMulti.push(nuns * 10));
// console.log(`Resultado com Map ${arrayNumMult}`);
// console.log(`Resultado com forEach ${arrayMulti}`);

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculoMedia(listaNotas) {
  //Acumulador servirá para guardar a soma de todas as notas da lista
  //nota receberá o valor do elemento no indice daquele momento de execução
  //O valor zero do segundo parâmetro da reduce é a inicialização da variárel acumulador
  const somaDasNotas = listaNotas.reduce((acumulador, nota) => {
    return acumulador + nota;
  }, 0);

  //const somaDasNotas = listaNotas.reduce ((acumulador, nota) => acumulador + nota, 0); outra forma de escrita
  const media = somaDasNotas / listaNotas.length;
  return media;
}

//const array = [...arrayanterior]; realizando a cópia de uma array
