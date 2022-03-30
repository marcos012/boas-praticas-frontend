import { PEDIDO_COM_DOIS_ITENS } from "./../../mocks/pedido-mock";
import { CodigoPipe } from "./../../codigo.pipe";
import { PedidoFormularioComponent } from "./../pedido-formulario/pedido-formulario.component";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PedidoListaComponent } from "./pedido-lista.component";
import { PEDIDO_COM_UM_ITEM } from "../../mocks/pedido-mock";

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

  it("deve mostrar dados do pedido", () => {
    let cabecalho = fixture.nativeElement.querySelectorAll("th");
    expect(cabecalho.length).toBe(6);

    expect(cabecalho[0].textContent).toContain("Código");
    expect(cabecalho[1].textContent).toContain("Descrição");
    expect(cabecalho[2].textContent).toContain("Categoria");
    expect(cabecalho[3].textContent).toContain("Valor");
    expect(cabecalho[4].textContent).toContain("Taxas");
    expect(cabecalho[5].textContent).toContain("Total");

    let linhasTabela = fixture.nativeElement.querySelectorAll("tbody tr");
    expect(linhasTabela.length).toBe(3);

    const primeiraLinha = linhasTabela[0];
    expect(primeiraLinha.cells[0].textContent).toBe("000001");
    expect(primeiraLinha.cells[1].textContent).toBe("Iphone 13");
    expect(primeiraLinha.cells[2].textContent).toBe("Celular");
    expect(primeiraLinha.cells[3].textContent).toBe("R$5,000.00");
    expect(primeiraLinha.cells[4].textContent).toBe("R$500.00");
    expect(primeiraLinha.cells[5].textContent).toBe("R$5,500.00");

    const segundaLinha = linhasTabela[1];
    expect(segundaLinha.cells[0].textContent).toBe("000002");
    expect(segundaLinha.cells[1].textContent).toBe("Heineken");
    expect(segundaLinha.cells[2].textContent).toBe("Bebida");
    expect(segundaLinha.cells[3].textContent).toBe("R$6.00");
    expect(segundaLinha.cells[4].textContent).toBe("R$1.20");
    expect(segundaLinha.cells[5].textContent).toBe("R$7.20");

    const terceiraLinha = linhasTabela[2];
    expect(terceiraLinha.cells[0].textContent).toBe("000003");
    expect(terceiraLinha.cells[1].textContent).toBe("Vape");
    expect(terceiraLinha.cells[2].textContent).toBe("Cigarro");
    expect(terceiraLinha.cells[3].textContent).toBe("R$50.00");
    expect(terceiraLinha.cells[4].textContent).toBe("R$20.00");
    expect(terceiraLinha.cells[5].textContent).toBe("R$70.00");

    let linhasRodape = fixture.nativeElement.querySelectorAll("tfoot tr");
    expect(linhasRodape.length).toBe(1);
    const rodade = linhasRodape[0];
    expect(rodade.cells[0].textContent).toBe("Total");
    expect(rodade.cells[1].textContent).toBe("R$5,056.00");
    expect(rodade.cells[2].textContent).toBe("R$521.20");
    expect(rodade.cells[3].textContent).toBe("R$5,577.20");
  });

  it("deve calcular a taxa do item", () => {
    component.pedido = PEDIDO_COM_UM_ITEM;
    fixture.detectChanges();
    let linhasTabela = fixture.nativeElement.querySelectorAll("tbody tr");
    const primeiraLinha = linhasTabela[0];
    expect(primeiraLinha.cells[4].textContent).toBe("R$100.00");
  });

  it("deve calcular o valor total do item", () => {
    component.pedido = PEDIDO_COM_UM_ITEM;
    fixture.detectChanges();
    let linhasTabela = fixture.nativeElement.querySelectorAll("tbody tr");
    const primeiraLinha = linhasTabela[0];
    expect(primeiraLinha.cells[5].textContent).toBe("R$1,100.00");
  });

  it("deve calcular o  subtotal do pedido", () => {
    component.pedido = PEDIDO_COM_DOIS_ITENS;
    fixture.detectChanges();

    let linhasRodape = fixture.nativeElement.querySelectorAll("tfoot tr");
    expect(linhasRodape.length).toBe(1);
    const rodade = linhasRodape[0];
    expect(rodade.cells[1].textContent).toBe("R$1,050.00");
  });


  it("deve calcular as taxas do pedido", () => {
    component.pedido = PEDIDO_COM_DOIS_ITENS;
    fixture.detectChanges();

    let linhasRodape = fixture.nativeElement.querySelectorAll("tfoot tr");
    expect(linhasRodape.length).toBe(1);
    const rodade = linhasRodape[0];
    expect(rodade.cells[2].textContent).toBe("R$120.00");
  });


  it("deve calcular o valor total do pedido", () => {
    component.pedido = PEDIDO_COM_DOIS_ITENS;
    fixture.detectChanges();

    let linhasRodape = fixture.nativeElement.querySelectorAll("tfoot tr");
    expect(linhasRodape.length).toBe(1);
    const rodade = linhasRodape[0];
    expect(rodade.cells[3].textContent).toBe("R$1,170.00");
  });

});
