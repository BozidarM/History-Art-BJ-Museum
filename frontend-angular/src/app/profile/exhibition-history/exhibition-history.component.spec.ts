import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionHistoryComponent } from './exhibition-history.component';

describe('ExhibitionHistoryComponent', () => {
  let component: ExhibitionHistoryComponent;
  let fixture: ComponentFixture<ExhibitionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibitionHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
