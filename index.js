import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Patricia", 11122233358); //instanciando os objetos;

const cliente2 = new Cliente("Marcos", 99922233358);
console.log(cliente2.cpf)


const contaCliente1 = new ContaCorrente(cliente1, 1001);
contaCliente1.depositar(500);
//console.log(contaCliente1)

const contaCliente2 = new ContaCorrente(cliente2, 1001);
//console.log(contaCliente2);

contaCliente1.transferir(200, contaCliente2);


console.log(contaCliente1, contaCliente2);
console.log(ContaCorrente.numeroContas);
