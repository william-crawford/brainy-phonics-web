import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KSoundsDetailsComponent } from './ksounds-details.component';

describe('KSoundsDetailsComponent', () => {
  let component: KSoundsDetailsComponent;
  let fixture: ComponentFixture<KSoundsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KSoundsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KSoundsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
