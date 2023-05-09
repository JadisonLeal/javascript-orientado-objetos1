// class User {
//     constructor(nome, email, nascimento, role, ativo = true) {
//         this.nome = nome;
//         this.email = email;
//         this.nascimento = nascimento;
//         this.role = role || 'estudante';
//         this.ativo = ativo;
//     }

//     exibirInfos() {
//         return `${this.nome}, ${this.email}`;
//     }
// }

// const novoUser = new User('Juliana', 'j@j.com', '2020-01-02');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());



export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo

    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome;
    }

    get email() {
        return this.#email;
    }

    get nascimento() {
        return this.#nascimento;
    }

    get role() {
        return this.#role;
    }

    get ativo() {
        return this.#ativo;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    set email(novoEmail) {
        this.#email = novoEmail;
    }



    // set nome(novoNome) {
    //     if(novoNome === '') {
    //         throw new Error('Modo inválido!');
    //     }
    //     this.#nome = novoNome;
    // }


    // #montaObjUser() {
    //     return ({
    //         nome: this.#nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento,
    //         role: this.#role,
    //         ativo: this.#ativo
    //     })
    // }

    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
    }
}


// codigo para criar um package.json pelo terminal "npm init -y"