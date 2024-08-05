const prompt = require("prompt-sync")();
ultimoID = 3;
const residencias = [
{
  id: 1,
  bairro: "Centro",
  rua: "Rua Jequitiba",
  numero: 71,
  moradores: ["Pedro", "Matheus"],
},
{
  id: 2,
  bairro: "Centro",
  rua: "Rua 2",
  numero: 72,
  moradores: ["Maria", "João"],
},
{
  id: 3,
  bairro: "Uvaranas",
  rua: "Rua Tamandaré",
  numero: 10,
  moradores: ["Ana", "José", "Paulo"],
}
]

const numValido = (numero) => isNaN(numero);

const modelo = () => {
  const residencia = {};
  while (true) {
    residencia.bairro = prompt("Informe o bairro que você mora: ");
    if (residencia.bairro == "") {
      console.log("O bairro não pode ser vazio!");
    } else {
      break;
    }
  }
  while (true) {
    residencia.rua = prompt("Informe a rua que você mora: ");

    if (residencia.rua == "") {
      console.log("Rua não pode estar vazia! ");
    } else {
      break;
    }
  }
  while (true) {
    residencia.numero = parseInt(
      prompt("Informe o número da casa que você mora: ")
    );

    if (numValido(residencia.numero)) {
      console.log("Digite um número!");
    } else {
      break;
    }
  }

  residencia.moradores = [];
  while (true) {
    let morador = prompt("Informe o nome dos moradores ou 'fim' para sair: ");

    if (morador == "fim") {
      break;
    }
    residencia.moradores.push(morador);
  }
  if (residencia.moradores.length > 0) {
    return residencia;
  }
  console.log("Residência tem que ter pelo menos 1 morador!");
};

const adicionarResidencia = () => {
  const residencia = modelo();
  residencia.id = ultimoID++;
  residencias.push(residencia);
  console.log("Residência cadastrada com sucesso!");
};

const listarResidencias = () => {
  residencias.forEach((residencia, index) => {
    console.log(
`--------------------------------------        
  ID: ${residencia.id}
Bairro: ${residencia.bairro}
Rua: ${residencia.rua}
Número: ${residencia.numero}`
    );
    residencia.moradores.forEach((morador, indice) => {
      console.log(`Morador ${indice + 1}: ${morador}`);
    });
  });
};

const atualizarResidencia = () => {
  if (residencias.length == 0) {
    console.log("Nenhuma residencia cadastrada!");
    return;
  }
  listarResidencias();
  while (true) {
    let idNovo;
    let index;
    const ID = parseInt(prompt("Informe o ID que deseja atualizar: "));
    if (numValido(ID)) {
      console.log("ID inválido!");
    } else {
      const novo = modelo();
      for(let i = 0;i < residencias.length; i++){
        if(ID == residencias[i].id){
          idNovo = residencias[i].id;
          index = i;
        }
      }
      novo.id = idNovo;
      residencias[index] = novo;
      console.log("Residência atualizada com sucesso!");
      break;
    }
  }
};

const removerResidencia = () => {
  if (residencias.length == 0) {
    console.log("Nenhuma residência cadastrada!");
    return;
  }
  listarResidencias();
  while (true) {
    let indice;
    const ID = parseInt(prompt("Informe o ID que deseja remover: "));
    if (numValido(ID)) {
      console.log("ID inválido!");
    } else {
      residencias.forEach((element, index) =>{
        if(ID == element.id){
          indice = index;
        }
      })
      residencias.splice(indice, 1);
      console.log("Residência removida com sucesso!");
      break;
    }
  }
};

module.exports = {
  adicionarResidencia,
  listarResidencias,
  atualizarResidencia,
  removerResidencia,
};
