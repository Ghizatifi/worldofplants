import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPlantsPage } from './select-plants.page';

describe('SelectPlantsPage', () => {
  let component: SelectPlantsPage;
  let fixture: ComponentFixture<SelectPlantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPlantsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPlantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
