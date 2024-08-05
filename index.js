const prompt = require("prompt-sync")();
const {adicionarResidencia,atualizarResidencia, listarResidencias, removerResidencia} = require('./residencias');

while(true){
    console.log(`O que você deseja fazer?
[1]Adicionar Residência
[2]Listar Residências
[3]Atualização de dados
[4]Deletar Residência
[5]Sair
    `)
    let opcao = +prompt("Digite aqui: ");
    switch(opcao){
        case 1:
            adicionarResidencia();
            break;
        case 2:
            listarResidencias();
            break;
        case 3:
            atualizarResidencia();
            break;
        case 4:
            removerResidencia();
            break;
        case 5:
            console.log("Encerrando sistema...");
            process.exit();
        default:
            console.log("Opção inválida!");
            break;
    }
}