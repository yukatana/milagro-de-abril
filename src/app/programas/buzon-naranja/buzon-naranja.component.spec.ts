import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzonNaranjaComponent } from './buzon-naranja.component';

describe('BuzonNaranjaComponent', () => {
  let component: BuzonNaranjaComponent;
  let fixture: ComponentFixture<BuzonNaranjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuzonNaranjaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuzonNaranjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
