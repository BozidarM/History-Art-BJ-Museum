import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultExhibitionsComponent } from './default-exhibitions.component';

describe('DefaultExhibitionsComponent', () => {
  let component: DefaultExhibitionsComponent;
  let fixture: ComponentFixture<DefaultExhibitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultExhibitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultExhibitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
