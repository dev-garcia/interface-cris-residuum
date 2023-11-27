import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeiraDoPolo2023Component } from './feira-do-polo-2023.component';

describe('FeiraDoPolo2023Component', () => {
  let component: FeiraDoPolo2023Component;
  let fixture: ComponentFixture<FeiraDoPolo2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeiraDoPolo2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeiraDoPolo2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
