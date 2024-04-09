import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPlantPage } from './select-plant.page';

describe('SelectPlantPage', () => {
  let component: SelectPlantPage;
  let fixture: ComponentFixture<SelectPlantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPlantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPlantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
