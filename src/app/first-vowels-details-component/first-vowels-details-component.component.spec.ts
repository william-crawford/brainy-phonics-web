import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstVowelsDetailsComponentComponent } from './first-vowels-details-component.component';

describe('FirstVowelsDetailsComponentComponent', () => {
  let component: FirstVowelsDetailsComponentComponent;
  let fixture: ComponentFixture<FirstVowelsDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstVowelsDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstVowelsDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
