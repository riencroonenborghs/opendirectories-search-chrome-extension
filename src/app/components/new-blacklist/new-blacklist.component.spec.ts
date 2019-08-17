import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBlacklistComponent } from './new-blacklist.component';

describe('NewBlacklistComponent', () => {
  let component: NewBlacklistComponent;
  let fixture: ComponentFixture<NewBlacklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBlacklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBlacklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
