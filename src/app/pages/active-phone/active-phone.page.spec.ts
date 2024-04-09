import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePhonePage } from './active-phone.page';

describe('ActivePhonePage', () => {
  let component: ActivePhonePage;
  let fixture: ComponentFixture<ActivePhonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivePhonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
