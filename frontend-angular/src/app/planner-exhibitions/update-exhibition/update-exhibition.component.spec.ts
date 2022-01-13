import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExhibitionComponent } from './update-exhibition.component';

describe('UpdateExhibitionComponent', () => {
  let component: UpdateExhibitionComponent;
  let fixture: ComponentFixture<UpdateExhibitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateExhibitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExhibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
