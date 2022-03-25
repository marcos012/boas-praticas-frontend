import { PedidoHttpService } from "./../../clients/pedido-http.service";
import { ItemPedido } from "./../../models/item-pedido";
import { Component, OnInit } from "@angular/core";
import { Pedido } from "../../models/pedido";

@Component({
  selector: "app-pedido-lista",
  templateUrl: "./pedido-lista.component.html",
  styleUrls: ["./pedido-lista.component.sass"],
})
export class PedidoListaComponent implements OnInit {
  public pedido: Pedido;
  constructor(private readonly pedidoHttpService: PedidoHttpService) {}

  ngOnInit() {
    this.pedidoHttpService
      .obtemPedido()
      .subscribe((pedido) => (this.pedido = pedido));
  }

  public get subTotal(): number {
    let subtotal: number = 0;
    this.pedido.itens.forEach((item) => (subtotal += item.valor));
    return subtotal;
  }

  public get taxas(): number {
    let taxa: number = 0;
    this.pedido.itens.forEach((item) => {
      taxa = this.calcularTaxa(item);
      taxa += item.valor;
    });
    return taxa;
  }

  public get total(): number {
    return this.subTotal + this.taxas;
  }

  calcularTaxa(item: ItemPedido): number {
    let taxa: number = 0;
    if (item.categoria === "Celular") {
      taxa = item.valor * 0.1;
    }
    if (item.categoria === "Bebida") {
      taxa = item.valor * 0.2;
    }
    if (item.categoria === "Cigarro") {
      taxa = item.valor * 0.4;
    }
    return taxa;
  }

  calcularTotal(item: ItemPedido): number {
    return item.valor + this.calcularTaxa(item);
  }

  formatarCodigo(id: number): string {
    console.log("entrei no formatar");
    return id.toString().padStart(6, "0");
  }

}
