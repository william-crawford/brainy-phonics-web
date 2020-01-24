import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonemeListVowelsComponent } from './phoneme-list-vowels.component';

describe('PhonemeListVowelsComponent', () => {
  let component: PhonemeListVowelsComponent;
  let fixture: ComponentFixture<PhonemeListVowelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonemeListVowelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonemeListVowelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
