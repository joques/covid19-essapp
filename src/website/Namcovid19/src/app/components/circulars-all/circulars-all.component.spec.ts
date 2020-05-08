import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularsAllComponent } from './circulars-all.component';

describe('CircularsAllComponent', () => {
  let component: CircularsAllComponent;
  let fixture: ComponentFixture<CircularsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircularsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
