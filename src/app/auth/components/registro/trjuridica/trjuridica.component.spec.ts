import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrjuridicaComponent } from './trjuridica.component';

describe('TrjuridicaComponent', () => {
  let component: TrjuridicaComponent;
  let fixture: ComponentFixture<TrjuridicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrjuridicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrjuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
