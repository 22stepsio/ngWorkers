import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersByCategoryComponent } from './workers-by-category.component';

describe('WorkersByCategoryComponent', () => {
  let component: WorkersByCategoryComponent;
  let fixture: ComponentFixture<WorkersByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
