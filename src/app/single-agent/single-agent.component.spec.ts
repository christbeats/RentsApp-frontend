import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAgentComponent } from './single-agent.component';

describe('SingleAgentComponent', () => {
  let component: SingleAgentComponent;
  let fixture: ComponentFixture<SingleAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleAgentComponent]
    });
    fixture = TestBed.createComponent(SingleAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
