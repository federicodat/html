import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUtenteComponent } from './login-utente.component';

describe('LoginUtenteComponent', () => {
  let component: LoginUtenteComponent;
  let fixture: ComponentFixture<LoginUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginUtenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
