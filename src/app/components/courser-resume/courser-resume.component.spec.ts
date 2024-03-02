import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourserResumeComponent } from './courser-resume.component';

describe('CourserResumeComponent', () => {
  let component: CourserResumeComponent;
  let fixture: ComponentFixture<CourserResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourserResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourserResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
