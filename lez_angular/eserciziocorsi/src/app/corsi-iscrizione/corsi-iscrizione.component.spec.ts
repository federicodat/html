import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsiIscrizioneComponent } from './corsi-iscrizione.component';

describe('CorsiIscrizioneComponent', () => {
  let component: CorsiIscrizioneComponent;
  let fixture: ComponentFixture<CorsiIscrizioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorsiIscrizioneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorsiIscrizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
