import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionsHistoryComponent } from './exhibitions-history.component';

describe('ExhibitionsHistoryComponent', () => {
  let component: ExhibitionsHistoryComponent;
  let fixture: ComponentFixture<ExhibitionsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibitionsHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
