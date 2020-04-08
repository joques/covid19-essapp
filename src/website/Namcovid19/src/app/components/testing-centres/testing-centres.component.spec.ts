import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingCentresComponent } from './testing-centres.component';

describe('TestingCentresComponent', () => {
  let component: TestingCentresComponent;
  let fixture: ComponentFixture<TestingCentresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingCentresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingCentresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
