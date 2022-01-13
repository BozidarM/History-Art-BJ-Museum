import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitsExhibitionsComponent } from './exhibits-exhibitions.component';

describe('ExhibitsExhibitionsComponent', () => {
  let component: ExhibitsExhibitionsComponent;
  let fixture: ComponentFixture<ExhibitsExhibitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibitsExhibitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitsExhibitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
