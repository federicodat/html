import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsiCorsistaComponent } from './corsi-corsista.component';

describe('CorsiCorsistaComponent', () => {
  let component: CorsiCorsistaComponent;
  let fixture: ComponentFixture<CorsiCorsistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorsiCorsistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorsiCorsistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
