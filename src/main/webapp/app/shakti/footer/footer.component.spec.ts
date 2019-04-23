import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaktiFooterComponent } from './footer.component';

describe('ShaktiFooterComponent', () => {
  let component: ShaktiFooterComponent;
  let fixture: ComponentFixture<ShaktiFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShaktiFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaktiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
