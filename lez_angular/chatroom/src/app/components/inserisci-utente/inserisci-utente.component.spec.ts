import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciUtenteComponent } from './inserisci-utente.component';

describe('InserisciUtenteComponent', () => {
  let component: InserisciUtenteComponent;
  let fixture: ComponentFixture<InserisciUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserisciUtenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserisciUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
