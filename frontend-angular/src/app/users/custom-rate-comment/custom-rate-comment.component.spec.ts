import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRateCommentComponent } from './custom-rate-comment.component';

describe('CustomRateCommentComponent', () => {
  let component: CustomRateCommentComponent;
  let fixture: ComponentFixture<CustomRateCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomRateCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRateCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
