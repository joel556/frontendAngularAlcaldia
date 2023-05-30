import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModestructuraComponent } from './modestructura.component';

describe('ModestructuraComponent', () => {
  let component: ModestructuraComponent;
  let fixture: ComponentFixture<ModestructuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModestructuraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModestructuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
