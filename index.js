import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// const novoUser = new User("Mariana", "m@m.com", "2010-01-01");
// console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Rodrigo", "r@r.com", "2010-01-01");

const novoDocente = new Docente('Guilherme', 'g@g.com', '2022-01-01');
console.log(novoDocente.exibirInfos());


// console.log(novoAdmin.nome);
// console.log(novoAdmin.email);
// novoAdmin.nome = 'andre';
// novoAdmin.email = 'a@a.com.br';
// console.log(novoAdmin.nome);
// console.log(novoAdmin.email);
