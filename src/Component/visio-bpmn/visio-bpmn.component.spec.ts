import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisioBPMNComponent } from './visio-bpmn.component';

describe('VisioBPMNComponent', () => {
  let component: VisioBPMNComponent;
  let fixture: ComponentFixture<VisioBPMNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisioBPMNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisioBPMNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
