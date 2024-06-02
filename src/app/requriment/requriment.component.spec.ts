import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequrimentComponent } from './requriment.component';

describe('RequrimentComponent', () => {
  let component: RequrimentComponent;
  let fixture: ComponentFixture<RequrimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequrimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequrimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
