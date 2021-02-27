import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposlenObavestenjeComponent } from './zaposlen-obavestenje.component';

describe('ZaposlenObavestenjeComponent', () => {
  let component: ZaposlenObavestenjeComponent;
  let fixture: ComponentFixture<ZaposlenObavestenjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposlenObavestenjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaposlenObavestenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
