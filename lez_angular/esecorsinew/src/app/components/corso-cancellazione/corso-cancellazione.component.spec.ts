import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsoCancellazioneComponent } from './corso-cancellazione.component';

describe('CorsoCancellazioneComponent', () => {
  let component: CorsoCancellazioneComponent;
  let fixture: ComponentFixture<CorsoCancellazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorsoCancellazioneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorsoCancellazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
