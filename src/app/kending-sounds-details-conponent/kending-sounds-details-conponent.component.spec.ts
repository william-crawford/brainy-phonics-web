import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KEndingSoundsDetailsConponentComponent } from './kending-sounds-details-conponent.component';

describe('KEndingSoundsDetailsConponentComponent', () => {
  let component: KEndingSoundsDetailsConponentComponent;
  let fixture: ComponentFixture<KEndingSoundsDetailsConponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KEndingSoundsDetailsConponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KEndingSoundsDetailsConponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
