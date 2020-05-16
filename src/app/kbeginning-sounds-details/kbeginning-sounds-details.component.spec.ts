import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KBeginningSoundsDetailsComponent } from './kbeginning-sounds-details.component';

describe('KBeginningSoundsDetailsComponent', () => {
  let component: KBeginningSoundsDetailsComponent;
  let fixture: ComponentFixture<KBeginningSoundsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KBeginningSoundsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KBeginningSoundsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
