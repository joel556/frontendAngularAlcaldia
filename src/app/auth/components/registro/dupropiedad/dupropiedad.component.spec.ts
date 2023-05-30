import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DupropiedadComponent } from './dupropiedad.component';

describe('DupropiedadComponent', () => {
  let component: DupropiedadComponent;
  let fixture: ComponentFixture<DupropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DupropiedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DupropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
