import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreamComponent } from './tream.component';

describe('TreamComponent', () => {
  let component: TreamComponent;
  let fixture: ComponentFixture<TreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
