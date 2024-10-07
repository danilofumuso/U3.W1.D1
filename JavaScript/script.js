var User = /** @class */ (function () {
  function User(_nome, _cognome) {
    this.credito = 0;
    this.numeroChiamate = 0;
    this.nome = _nome;
    this.cognome = _cognome;
  }
  User.prototype.ricarica = function (cifra) {
    this.credito += cifra;
  };
  User.prototype.chiamata = function (durataChiamata) {
    var costoChiamata = durataChiamata * 0.2; //ho creato la variabile perché Prettier mi eliminava le tonde e il risultato era sbagliato!
    if (this.credito - costoChiamata < 0) {
      console.log("Impossibile effettuare la Chiamata!");
    } else {
      this.credito -= costoChiamata;
      this.numeroChiamate += 1;
    }
  };
  User.prototype.chiama404 = function () {
    return this.credito;
  };
  User.prototype.getNumeroChiamate = function () {
    return this.numeroChiamate;
  };
  User.prototype.azzeraChiamate = function () {
    this.numeroChiamate = 0;
  };
  return User;
})();
var user1 = new User("Francesca", "F");
user1.ricarica(20);
console.log(user1);
user1.chiamata(50);
user1.chiamata(120);
console.log(user1.chiama404());
console.log(user1.getNumeroChiamate());
user1.azzeraChiamate();
console.log(user1.getNumeroChiamate());
var user2 = new User("Giacomo", "S");
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
