import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonemeListConsonantBlendsComponent } from './phoneme-list-consonantblends.component';

describe('PhonemeListConsonantBlendsComponent', () => {
  let component: PhonemeListConsonantBlendsComponent;
  let fixture: ComponentFixture<PhonemeListConsonantBlendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonemeListConsonantBlendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonemeListConsonantBlendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
