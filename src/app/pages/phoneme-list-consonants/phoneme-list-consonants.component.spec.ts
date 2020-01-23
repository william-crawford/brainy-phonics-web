import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonemeListConsonantsComponent } from './phoneme-list-consonants.component';

describe('PhonemeListConsonantsComponent', () => {
  let component: PhonemeListConsonantsComponent;
  let fixture: ComponentFixture<PhonemeListConsonantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonemeListConsonantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonemeListConsonantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
