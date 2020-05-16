import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KCategoriesComponent } from './kcategories.component';

describe('KCategoriesComponent', () => {
  let component: KCategoriesComponent;
  let fixture: ComponentFixture<KCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
