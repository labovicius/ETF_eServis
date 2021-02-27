import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZaposleniComponent } from './add-zaposleni.component';

describe('AddZaposleniComponent', () => {
  let component: AddZaposleniComponent;
  let fixture: ComponentFixture<AddZaposleniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddZaposleniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddZaposleniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
