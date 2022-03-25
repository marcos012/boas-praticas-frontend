import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PedidoListaComponent } from "./components/pedido-lista/pedido-lista.component";
import { PedidoFormularioComponent } from "./components/pedido-formulario/pedido-formulario.component";
import { MatTableModule } from "@angular/material";
import { PedidoRouting } from "./pedido-routing";
import { CodigoPipe } from './codigo.pipe';

@NgModule({
  declarations: [PedidoListaComponent, PedidoFormularioComponent, CodigoPipe],
  imports: [CommonModule, MatTableModule, PedidoRouting],
})
export class PedidoModule {}
