import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogLocationPage } from './catalog-location.page';

describe('CatalogLocationPage', () => {
  let component: CatalogLocationPage;
  let fixture: ComponentFixture<CatalogLocationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
