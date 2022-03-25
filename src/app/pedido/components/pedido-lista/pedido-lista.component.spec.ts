import { CodigoPipe } from "./../../codigo.pipe";
import { PedidoFormularioComponent } from "./../pedido-formulario/pedido-formulario.component";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PedidoListaComponent } from "./pedido-lista.component";
import { By } from "@angular/platform-browser";
import { debug } from "console";

describe("PedidoListaComponent", () => {
  let component: PedidoListaComponent;
  let fixture: ComponentFixture<PedidoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PedidoListaComponent,
        PedidoFormularioComponent,
        CodigoPipe,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
