import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseInfoComponent } from './horse-info.component';

describe('HorseInfoComponent', () => {
  let component: HorseInfoComponent;
  let fixture: ComponentFixture<HorseInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorseInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
