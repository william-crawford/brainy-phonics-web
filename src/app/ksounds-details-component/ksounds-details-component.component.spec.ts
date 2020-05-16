import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KSoundsDetailsComponentComponent } from './ksounds-details-component.component';

describe('KSoundsDetailsComponentComponent', () => {
  let component: KSoundsDetailsComponentComponent;
  let fixture: ComponentFixture<KSoundsDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KSoundsDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KSoundsDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
