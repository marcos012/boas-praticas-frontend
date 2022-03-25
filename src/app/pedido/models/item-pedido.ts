export class ItemPedido {
  constructor(
    public readonly id: number,
    public readonly descricao: string,
    public readonly categoria: string,
    public readonly valor: number
  ) {}
}
