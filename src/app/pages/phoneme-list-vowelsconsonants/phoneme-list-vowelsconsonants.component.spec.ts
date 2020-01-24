import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonemeListVowelsConsonantsComponent } from './phoneme-list-vowelsconsonants.component';

describe('PhonemeListVowelsConsonantsComponent', () => {
  let component: PhonemeListVowelsConsonantsComponent;
  let fixture: ComponentFixture<PhonemeListVowelsConsonantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonemeListVowelsConsonantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonemeListVowelsConsonantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
