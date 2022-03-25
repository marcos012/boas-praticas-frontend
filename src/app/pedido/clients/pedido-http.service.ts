import { Pedido } from "./../models/pedido";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { PEDIDO } from "../mocks/pedido-mock";

@Injectable({
  providedIn: "root",
})
export class PedidoHttpService {
  private pedido$ = of(PEDIDO);

  constructor() {}

  obtemPedido(): Observable<Pedido> {
    return this.pedido$;
  }
}
