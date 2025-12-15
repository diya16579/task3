import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eng } from './eng';

describe('Eng', () => {
  let component: Eng;
  let fixture: ComponentFixture<Eng>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eng]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eng);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
