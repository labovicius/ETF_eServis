import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposlenPredmetComponent } from './zaposlen-predmet.component';

describe('ZaposlenPredmetComponent', () => {
  let component: ZaposlenPredmetComponent;
  let fixture: ComponentFixture<ZaposlenPredmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposlenPredmetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaposlenPredmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
