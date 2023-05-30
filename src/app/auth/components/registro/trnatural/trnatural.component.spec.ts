import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrnaturalComponent } from './trnatural.component';

describe('TrnaturalComponent', () => {
  let component: TrnaturalComponent;
  let fixture: ComponentFixture<TrnaturalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrnaturalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrnaturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
