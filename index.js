class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        switch (this.tipo) {
            case "mago":
                ataque = " magia";
                break;
            case "guerreiro":
                ataque = " espada";
                break;
            case "monge":
                ataque = " artes marciais";
                break;
            case "ninja":
                ataque = " shuriken";
                break;
            default:
                ataque = "não possui ataque definido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


const heroi1 = new Heroi("Herói1", 25, "mago");
heroi1.atacar();

const heroi2 = new Heroi("Herói2", 30, "guerreiro");
heroi2.atacar();
