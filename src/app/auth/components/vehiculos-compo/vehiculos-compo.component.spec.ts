import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosCompoComponent } from './vehiculos-compo.component';

describe('VehiculosCompoComponent', () => {
  let component: VehiculosCompoComponent;
  let fixture: ComponentFixture<VehiculosCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculosCompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculosCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
