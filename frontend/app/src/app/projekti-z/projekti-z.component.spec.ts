import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektiZComponent } from './projekti-z.component';

describe('ProjektiZComponent', () => {
  let component: ProjektiZComponent;
  let fixture: ComponentFixture<ProjektiZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjektiZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektiZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
