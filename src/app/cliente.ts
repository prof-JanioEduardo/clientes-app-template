export class Cliente {
    id: number;
    nome: string;
    email: string;
    telefone: string;
  
    constructor(id: number, nome: string, email: string, telefone: string) {
      this.id = id;
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
    }
  
    exibirInfo(): string {
      return `Cliente: ${this.nome} (ID: ${this.id}) - Email: ${this.email} - Telefone: ${this.telefone}`;
    }
  
    atualizarDados(nome: string, email: string, telefone: string): void {
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
    }
  }
  