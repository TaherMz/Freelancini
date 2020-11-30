import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritCComponent } from './inscrit-c.component';

describe('InscritCComponent', () => {
  let component: InscritCComponent;
  let fixture: ComponentFixture<InscritCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscritCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscritCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
