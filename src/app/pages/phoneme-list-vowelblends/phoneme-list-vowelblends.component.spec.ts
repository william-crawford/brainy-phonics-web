import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonemeListVowelBlendsComponent } from './phoneme-list-vowelblends.component';

describe('PhonemeListVowelBlendsComponent', () => {
  let component: PhonemeListVowelBlendsComponent;
  let fixture: ComponentFixture<PhonemeListVowelBlendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonemeListVowelBlendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonemeListVowelBlendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
