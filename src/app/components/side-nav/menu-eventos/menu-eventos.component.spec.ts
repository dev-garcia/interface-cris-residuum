import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEventosComponent } from './menu-eventos.component';

describe('MenuEventosComponent', () => {
  let component: MenuEventosComponent;
  let fixture: ComponentFixture<MenuEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuEventosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
