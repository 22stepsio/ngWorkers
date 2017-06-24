import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersByImageComponent } from './workers-by-image.component';

describe('WorkersByImageComponent', () => {
  let component: WorkersByImageComponent;
  let fixture: ComponentFixture<WorkersByImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersByImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersByImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
