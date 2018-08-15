import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalaniarComponent } from './balaniar.component';

describe('BalaniarComponent', () => {
  let component: BalaniarComponent;
  let fixture: ComponentFixture<BalaniarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalaniarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalaniarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
