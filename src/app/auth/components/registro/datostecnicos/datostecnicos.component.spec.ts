import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatostecnicosComponent } from './datostecnicos.component';

describe('DatostecnicosComponent', () => {
  let component: DatostecnicosComponent;
  let fixture: ComponentFixture<DatostecnicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatostecnicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatostecnicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
