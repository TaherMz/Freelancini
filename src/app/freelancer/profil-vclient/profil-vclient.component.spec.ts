import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilVClientComponent } from './profil-vclient.component';

describe('ProfilVClientComponent', () => {
  let component: ProfilVClientComponent;
  let fixture: ComponentFixture<ProfilVClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilVClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilVClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
