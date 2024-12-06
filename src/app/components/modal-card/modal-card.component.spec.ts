import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalCardComponent } from './modal-card.component';

describe('ModalCardComponent', () => {
  let component: ModalCardComponent;
  let fixture: ComponentFixture<ModalCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ModalCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
