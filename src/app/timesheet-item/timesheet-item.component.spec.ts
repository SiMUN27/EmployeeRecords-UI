import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetItemComponent } from './timesheet-item.component';

describe('TimesheetItemComponent', () => {
  let component: TimesheetItemComponent;
  let fixture: ComponentFixture<TimesheetItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
