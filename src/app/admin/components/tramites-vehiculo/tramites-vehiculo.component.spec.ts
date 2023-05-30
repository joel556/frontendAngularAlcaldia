import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramitesVehiculoComponent } from './tramites-vehiculo.component';


describe('TramitesVehiculoComponent', () => {
  let component: TramitesVehiculoComponent;
  let fixture: ComponentFixture<TramitesVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TramitesVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TramitesVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
