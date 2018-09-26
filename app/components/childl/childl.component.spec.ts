import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildlComponent } from './childl.component';

describe('ChildlComponent', () => {
  let component: ChildlComponent;
  let fixture: ComponentFixture<ChildlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
