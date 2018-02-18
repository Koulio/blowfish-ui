import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTerminalsComponent } from './list-terminals.component';

describe('ListTerminalsComponent', () => {
  let component: ListTerminalsComponent;
  let fixture: ComponentFixture<ListTerminalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTerminalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTerminalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
