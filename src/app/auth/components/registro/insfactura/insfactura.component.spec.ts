import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsfacturaComponent } from './insfactura.component';

describe('InsfacturaComponent', () => {
  let component: InsfacturaComponent;
  let fixture: ComponentFixture<InsfacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsfacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsfacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
