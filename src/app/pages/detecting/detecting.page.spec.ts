import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectingPage } from './detecting.page';

describe('DetectingPage', () => {
  let component: DetectingPage;
  let fixture: ComponentFixture<DetectingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
