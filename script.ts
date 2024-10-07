interface iSim {
  credito: number;
  numeroChiamate: number;
}

class User implements iSim {
  nome: string;
  cognome: string;
  credito: number = 0;
  numeroChiamate: number = 0;

  constructor(_nome: string, _cognome: string) {
    this.nome = _nome;
    this.cognome = _cognome;
  }

  ricarica(cifra: number): void {
    this.credito += cifra;
  }

  chiamata(durataChiamata: number): void {
    const costoChiamata = durataChiamata * 0.2;
    if (this.credito - costoChiamata < 0) {
      console.log("Impossibile effettuare la Chiamata!");
    } else {
      this.credito -= costoChiamata;
      this.numeroChiamate += 1;
    }
  }

  chiama404(): number {
    return this.credito;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

const user1 = new User("Francesca", "F");
user1.ricarica(20);
console.log(user1);
user1.chiamata(50);
user1.chiamata(120);
console.log(user1.chiama404());
console.log(user1.getNumeroChiamate());
user1.azzeraChiamate();
console.log(user1.getNumeroChiamate());

const user2 = new User("Giacomo", "S");
user2.ricarica(20);
console.log(user2);
user2.chiamata(4);
user2.chiamata(6);
user2.chiamata(8);
user2.chiamata(3);
user2.chiamata(16);
console.log(user2.chiama404());
console.log(user2.getNumeroChiamate());
user2.azzeraChiamate();
console.log(user2.getNumeroChiamate());
