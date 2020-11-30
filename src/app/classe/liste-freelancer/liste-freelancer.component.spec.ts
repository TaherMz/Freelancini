import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFreelancerComponent } from './liste-freelancer.component';

describe('ListeFreelancerComponent', () => {
  let component: ListeFreelancerComponent;
  let fixture: ComponentFixture<ListeFreelancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
