import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCategoriesComponentComponent } from './first-categories-component.component';

describe('FirstCategoriesComponentComponent', () => {
  let component: FirstCategoriesComponentComponent;
  let fixture: ComponentFixture<FirstCategoriesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstCategoriesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCategoriesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
