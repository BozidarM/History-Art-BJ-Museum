import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerExhibitionsComponent } from './planner-exhibitions.component';

describe('PlannerExhibitionsComponent', () => {
  let component: PlannerExhibitionsComponent;
  let fixture: ComponentFixture<PlannerExhibitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerExhibitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerExhibitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
