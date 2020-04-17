import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingInfoComponent } from './testing-info.component';

describe('TestingInfoComponent', () => {
  let component: TestingInfoComponent;
  let fixture: ComponentFixture<TestingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
