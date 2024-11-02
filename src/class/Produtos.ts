export class Produtos {
  private nome: string;
  private valor: number;

  constructor(nome: string, valor: number) {
    this.nome = nome;
    this.valor = valor;
  }

  public get getNome() {
    return this.nome;
  }

  public set setNome(nome: string) {
    this.nome = nome;
  }

  public get getValor() {
    return this.valor;
  }

  public set setVome(valor: number) {
    this.valor = valor;
  }
}
