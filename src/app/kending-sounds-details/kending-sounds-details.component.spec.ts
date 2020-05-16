import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KEndingSoundsDetailsComponent } from './kending-sounds-details.component';

describe('KEndingSoundsDetailsComponent', () => {
  let component: KEndingSoundsDetailsComponent;
  let fixture: ComponentFixture<KEndingSoundsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KEndingSoundsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KEndingSoundsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
