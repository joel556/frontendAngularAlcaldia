import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrespecialComponent } from './trespecial.component';

describe('TrespecialComponent', () => {
  let component: TrespecialComponent;
  let fixture: ComponentFixture<TrespecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrespecialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrespecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
