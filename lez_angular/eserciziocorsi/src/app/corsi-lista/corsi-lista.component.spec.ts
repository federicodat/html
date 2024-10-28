import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsiListaComponent } from './corsi-lista.component';

describe('CorsiListaComponent', () => {
  let component: CorsiListaComponent;
  let fixture: ComponentFixture<CorsiListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorsiListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorsiListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
