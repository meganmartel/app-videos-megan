import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireVideoComponent } from './formulaire-video.component';

describe('FormulaireVideoComponent', () => {
  let component: FormulaireVideoComponent;
  let fixture: ComponentFixture<FormulaireVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireVideoComponent]
    });
    fixture = TestBed.createComponent(FormulaireVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
