import {Cliente} from "./Cliente.js";
//import { Conta } from "./Contas/Conta.js";
//import {ContaCorrente} from "./Contas/ContaCorrente.js";
//import {ContaPoupanca} from "./Contas/ContaPoupanca.js";
//import {ContaSalario} from "./Contas/ContaSalario.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import { sistemaAutenticacao } from "./sistemaAutenticao.js";

/* Index da primeira parte do curso:
const cliente1 = new Cliente("Patricia", 11122233358); //instanciando os objetos;

const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001);
contaCorrenteCliente1.depositar(500);
contaCorrenteCliente1.sacar(100);

const contaPoupancaCliente1 = new ContaPoupanca(50, cliente1, 1001);

const conta = new Conta(0, cliente1, 1001);

console.log(contaPoupancaCliente1);
console.log(contaCorrenteCliente1);*/

const diretor = new Diretor("Maria", 10000, 12345678900);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("José", 5000, 98765432100);
gerente.cadastrarSenha("112233")

const cliente = new Cliente("Pedro", 55566677711, "123");

const diretorEstaLogado = sistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = sistemaAutenticacao.login(gerente, "112233");
const clienteEstaLogado = sistemaAutenticacao.login(cliente, "123");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);






