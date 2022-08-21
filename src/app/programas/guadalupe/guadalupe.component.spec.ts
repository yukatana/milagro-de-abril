import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuadalupeComponent } from './guadalupe.component';

describe('GuadalupeComponent', () => {
  let component: GuadalupeComponent;
  let fixture: ComponentFixture<GuadalupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuadalupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuadalupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
