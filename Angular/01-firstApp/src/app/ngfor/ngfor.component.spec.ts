/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgforComponent } from './ngfor.component';

describe('NgforComponent', () => {
  let component: NgforComponent;
  let fixture: ComponentFixture<NgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
