import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentPredmetComponent } from './add-student-predmet.component';

describe('AddStudentPredmetComponent', () => {
  let component: AddStudentPredmetComponent;
  let fixture: ComponentFixture<AddStudentPredmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentPredmetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentPredmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
