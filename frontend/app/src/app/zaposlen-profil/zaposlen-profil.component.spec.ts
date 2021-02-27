import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposlenProfilComponent } from './zaposlen-profil.component';

describe('ZaposlenProfilComponent', () => {
  let component: ZaposlenProfilComponent;
  let fixture: ComponentFixture<ZaposlenProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposlenProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaposlenProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
