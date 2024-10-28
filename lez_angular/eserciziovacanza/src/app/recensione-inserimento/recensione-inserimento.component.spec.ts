import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecensioneInserimentoComponent } from './recensione-inserimento.component';

describe('RecensioneInserimentoComponent', () => {
  let component: RecensioneInserimentoComponent;
  let fixture: ComponentFixture<RecensioneInserimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecensioneInserimentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecensioneInserimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
