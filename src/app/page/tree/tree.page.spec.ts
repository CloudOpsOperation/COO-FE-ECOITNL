import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TreePage } from './tree.page';

describe('TreePage', () => {
  let component: TreePage;
  let fixture: ComponentFixture<TreePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreePage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});