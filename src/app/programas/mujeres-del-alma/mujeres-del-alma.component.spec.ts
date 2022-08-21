import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MujeresDelAlmaComponent } from './mujeres-del-alma.component';

describe('MujeresDelAlmaComponent', () => {
  let component: MujeresDelAlmaComponent;
  let fixture: ComponentFixture<MujeresDelAlmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MujeresDelAlmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MujeresDelAlmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
