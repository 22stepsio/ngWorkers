import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersByFilterComponent } from './workers-by-filter.component';

describe('WorkersByFilterComponent', () => {
  let component: WorkersByFilterComponent;
  let fixture: ComponentFixture<WorkersByFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersByFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersByFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
