import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadicatoriaComponent } from './radicatoria.component';

describe('RadicatoriaComponent', () => {
  let component: RadicatoriaComponent;
  let fixture: ComponentFixture<RadicatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadicatoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadicatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
