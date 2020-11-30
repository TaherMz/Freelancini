import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectfComponent } from './connectf.component';

describe('ConnectfComponent', () => {
  let component: ConnectfComponent;
  let fixture: ComponentFixture<ConnectfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
