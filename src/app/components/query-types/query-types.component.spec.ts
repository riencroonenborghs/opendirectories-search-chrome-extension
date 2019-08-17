import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryTypesComponent } from './query-types.component';

describe('QueryTypesComponent', () => {
  let component: QueryTypesComponent;
  let fixture: ComponentFixture<QueryTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
