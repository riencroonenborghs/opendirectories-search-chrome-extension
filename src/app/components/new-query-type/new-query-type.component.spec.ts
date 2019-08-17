import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQueryTypeComponent } from './new-query-type.component';

describe('NewQueryTypeComponent', () => {
  let component: NewQueryTypeComponent;
  let fixture: ComponentFixture<NewQueryTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQueryTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQueryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
