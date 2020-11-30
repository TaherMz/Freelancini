import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierProfilFreelancerComponent } from './modifier-profil-freelancer.component';

describe('ModifierProfilFreelancerComponent', () => {
  let component: ModifierProfilFreelancerComponent;
  let fixture: ComponentFixture<ModifierProfilFreelancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierProfilFreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierProfilFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
