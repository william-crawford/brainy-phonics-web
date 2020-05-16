import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KBeginningSoundsDetailsComponentComponent } from './kbeginning-sounds-details-component.component';

describe('KBeginningSoundsDetailsComponentComponent', () => {
  let component: KBeginningSoundsDetailsComponentComponent;
  let fixture: ComponentFixture<KBeginningSoundsDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KBeginningSoundsDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KBeginningSoundsDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
