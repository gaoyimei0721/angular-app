import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildiComponent } from './childi.component';

describe('ChildiComponent', () => {
  let component: ChildiComponent;
  let fixture: ComponentFixture<ChildiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
