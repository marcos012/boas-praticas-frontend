import { ItemPedido } from "./item-pedido";

export class Pedido {
  constructor(public readonly itens: ItemPedido[]) {}
}
