import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritFComponent } from './inscrit-f.component';

describe('InscritFComponent', () => {
  let component: InscritFComponent;
  let fixture: ComponentFixture<InscritFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscritFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscritFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
