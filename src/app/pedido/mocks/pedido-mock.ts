import { ItemPedido } from "../models/item-pedido";
import { Pedido } from "../models/pedido";

export const PEDIDO: Pedido = new Pedido([
  new ItemPedido(1, "Iphone 13", "Celular", 5000),
  new ItemPedido(2, "Heineken", "Bebida", 6),
  new ItemPedido(3, "Vape", "Cigarro", 50),
]);

export const PEDIDO_COM_UM_ITEM = new Pedido([
  new ItemPedido(1, "Motorola", "Celular", 1000),
]);



export const PEDIDO_COM_DOIS_ITENS = new Pedido([
  new ItemPedido(3, "Vape", "Cigarro", 50),
  new ItemPedido(1, "Motorola", "Celular", 1000),
]);
