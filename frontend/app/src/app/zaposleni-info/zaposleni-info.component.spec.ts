import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniInfoComponent } from './zaposleni-info.component';

describe('ZaposleniInfoComponent', () => {
  let component: ZaposleniInfoComponent;
  let fixture: ComponentFixture<ZaposleniInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposleniInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaposleniInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
