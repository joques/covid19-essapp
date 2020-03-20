import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsPeriodicComponent } from './statistics-periodic.component';

describe('StatisticsPeriodicComponent', () => {
  let component: StatisticsPeriodicComponent;
  let fixture: ComponentFixture<StatisticsPeriodicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsPeriodicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsPeriodicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
