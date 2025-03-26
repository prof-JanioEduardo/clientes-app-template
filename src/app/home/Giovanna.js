class Popup {
    constructor(nome) {
      this.nome = nome;
    }
  
    mostrarNome() {
      alert(`Olá, ${this.nome}!`);
    }
  }
  
  // Exemplo de uso:
  const meuPopup = new Popup("Giovanna");
  meuPopup.mostrarNome();
  