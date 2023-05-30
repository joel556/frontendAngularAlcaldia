import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RebajatribuComponent } from './rebajatribu.component';

describe('RebajatribuComponent', () => {
  let component: RebajatribuComponent;
  let fixture: ComponentFixture<RebajatribuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RebajatribuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RebajatribuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
