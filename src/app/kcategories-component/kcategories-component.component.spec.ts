import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KCategoriesComponentComponent } from './kcategories-component.component';

describe('KCategoriesComponentComponent', () => {
  let component: KCategoriesComponentComponent;
  let fixture: ComponentFixture<KCategoriesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KCategoriesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KCategoriesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
