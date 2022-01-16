import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionDetailsComponent } from './exhibition-details.component';

describe('ExhibitionDetailsComponent', () => {
  let component: ExhibitionDetailsComponent;
  let fixture: ComponentFixture<ExhibitionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibitionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
