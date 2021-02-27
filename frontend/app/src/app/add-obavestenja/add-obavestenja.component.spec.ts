import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObavestenjaComponent } from './add-obavestenja.component';

describe('AddObavestenjaComponent', () => {
  let component: AddObavestenjaComponent;
  let fixture: ComponentFixture<AddObavestenjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddObavestenjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddObavestenjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
