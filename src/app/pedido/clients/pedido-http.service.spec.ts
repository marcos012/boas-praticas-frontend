import { TestBed } from '@angular/core/testing';

import { PedidoHttpService } from './pedido-http.service';

describe('PedidoHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PedidoHttpService = TestBed.get(PedidoHttpService);
    expect(service).toBeTruthy();
  });
});
