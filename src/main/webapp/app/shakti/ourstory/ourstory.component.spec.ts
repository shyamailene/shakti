import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurstoryComponent } from './ourstory.component';

describe('OurstoryComponent', () => {
  let component: OurstoryComponent;
  let fixture: ComponentFixture<OurstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
