import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GriphusComponent } from './griphus.component';

describe('GriphusComponent', () => {
  let component: GriphusComponent;
  let fixture: ComponentFixture<GriphusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GriphusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GriphusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
