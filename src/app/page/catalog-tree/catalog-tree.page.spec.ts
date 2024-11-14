import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogTreePage } from './catalog-tree.page';

describe('CatalogTreePage', () => {
  let component: CatalogTreePage;
  let fixture: ComponentFixture<CatalogTreePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogTreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
