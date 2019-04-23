import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaktiNavbarComponent } from './navbar.component';

describe('ShaktiNavbarComponent', () => {
  let component: ShaktiNavbarComponent;
  let fixture: ComponentFixture<ShaktiNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShaktiNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaktiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
