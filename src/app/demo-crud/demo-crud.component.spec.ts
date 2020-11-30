import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DEMOCRUDComponent } from './demo-crud.component';

describe('DEMOCRUDComponent', () => {
  let component: DEMOCRUDComponent;
  let fixture: ComponentFixture<DEMOCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DEMOCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DEMOCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
