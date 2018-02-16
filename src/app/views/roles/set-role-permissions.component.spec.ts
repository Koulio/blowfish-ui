import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRolePermissionsComponent } from './set-role-permissions.component';

describe('SetRolePermissionsComponent', () => {
  let component: SetRolePermissionsComponent;
  let fixture: ComponentFixture<SetRolePermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetRolePermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRolePermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
