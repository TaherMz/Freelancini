import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConneccComponent } from './connecc.component';

describe('ConneccComponent', () => {
  let component: ConneccComponent;
  let fixture: ComponentFixture<ConneccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConneccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConneccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
