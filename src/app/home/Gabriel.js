// Eu Gabriel acredito na virada
class Gabriel {
    constructor(nome) {
      this.nome = nome;
    }
   exibirPopup() {
      alert(`Meu nome é $'{this.nome}!`);
   }
  
  //Exibir o popup 
  document.addEventListener("DOMContentLoaded"), () => {
    const pessoa = new Gabriel("Gabriel")
    pessoa.exibirPopup();
  }
  