import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KNamesDetailsComponentComponent } from './knames-details-component.component';

describe('KNamesDetailsComponentComponent', () => {
  let component: KNamesDetailsComponentComponent;
  let fixture: ComponentFixture<KNamesDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KNamesDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KNamesDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
