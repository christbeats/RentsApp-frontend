import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePropertyComponent } from './single-property.component';

describe('SinglePropertyComponent', () => {
  let component: SinglePropertyComponent;
  let fixture: ComponentFixture<SinglePropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePropertyComponent]
    });
    fixture = TestBed.createComponent(SinglePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
