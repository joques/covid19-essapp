import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechResponseComponent } from './tech-response.component';

describe('TechResponseComponent', () => {
  let component: TechResponseComponent;
  let fixture: ComponentFixture<TechResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
