import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScanCodeComponent } from './scan-code.page';

describe('ScanCodeComponent', () => {
  let component: ScanCodeComponent;
  let fixture: ComponentFixture<ScanCodeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ScanCodeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScanCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
