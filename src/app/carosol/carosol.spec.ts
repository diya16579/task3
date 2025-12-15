import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carosol } from './carosol';

describe('Carosol', () => {
  let component: Carosol;
  let fixture: ComponentFixture<Carosol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carosol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carosol);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
