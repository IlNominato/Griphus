import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeriprimiComponent } from './numeriprimi.component';

describe('NumeriprimiComponent', () => {
  let component: NumeriprimiComponent;
  let fixture: ComponentFixture<NumeriprimiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeriprimiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeriprimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
