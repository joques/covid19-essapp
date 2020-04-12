import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsLatestComponent } from './statistics-latest.component';

describe('StatisticsLatestComponent', () => {
  let component: StatisticsLatestComponent;
  let fixture: ComponentFixture<StatisticsLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
