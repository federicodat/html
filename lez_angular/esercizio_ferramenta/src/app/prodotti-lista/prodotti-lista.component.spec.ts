import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottiListaComponent } from './prodotti-lista.component';

describe('ProdottiListaComponent', () => {
  let component: ProdottiListaComponent;
  let fixture: ComponentFixture<ProdottiListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdottiListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdottiListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
