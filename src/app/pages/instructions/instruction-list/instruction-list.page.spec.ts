import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionListPage } from './instruction-list.page';

describe('InstructionListPage', () => {
  let component: InstructionListPage;
  let fixture: ComponentFixture<InstructionListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
