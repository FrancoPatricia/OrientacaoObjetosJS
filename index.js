import {Cliente} from "./Cliente.js";
import { Conta } from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import {ContaSalario} from "./ContaSalario.js";

const cliente1 = new Cliente("Patricia", 11122233358); //instanciando os objetos;

const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001);
contaCorrenteCliente1.depositar(500);
contaCorrenteCliente1.sacar(100);

const contaPoupancaCliente1 = new ContaPoupanca(50, cliente1, 1001);

const conta = new Conta(0, cliente1, 1001);

console.log(contaPoupancaCliente1);
console.log(contaCorrenteCliente1);
console.log(conta);




