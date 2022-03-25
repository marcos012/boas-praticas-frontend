import { PedidoListaComponent } from './components/pedido-lista/pedido-lista.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: PedidoListaComponent,
  },
  {
    path: "pedidos",
    component: PedidoListaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoRouting {}
