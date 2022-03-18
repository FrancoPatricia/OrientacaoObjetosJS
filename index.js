import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import {ContaSalario} from "./ContaSalario.js";

const cliente1 = new Cliente("Patricia", 11122233358); //instanciando os objetos;

const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001);
const contaPoupancaCliente1 = new ContaPoupanca(50, cliente1, 1001);
const contaSalarioCliente1 = new ContaSalario(cliente1);

contaSalarioCliente1.depositar(100);
contaSalarioCliente1.sacar(10);


console.log(contaSalarioCliente1);

