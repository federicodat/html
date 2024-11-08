import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaChatComponent } from './lista-chat.component';

describe('ListaChatComponent', () => {
  let component: ListaChatComponent;
  let fixture: ComponentFixture<ListaChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
