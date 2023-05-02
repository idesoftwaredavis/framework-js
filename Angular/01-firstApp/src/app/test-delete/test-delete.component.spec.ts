import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDeleteComponent } from './test-delete.component';

describe('TestDeleteComponent', () => {
  let component: TestDeleteComponent;
  let fixture: ComponentFixture<TestDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
