import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaLatestInfoComponent } from './corona-latest-info.component';

describe('CoronaLatestInfoComponent', () => {
  let component: CoronaLatestInfoComponent;
  let fixture: ComponentFixture<CoronaLatestInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaLatestInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaLatestInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
