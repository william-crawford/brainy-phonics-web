import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KNamesDetailsComponent } from './knames-details.component';

describe('KNamesDetailsComponent', () => {
  let component: KNamesDetailsComponent;
  let fixture: ComponentFixture<KNamesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KNamesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KNamesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
