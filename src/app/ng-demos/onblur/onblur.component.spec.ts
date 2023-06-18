import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnblurComponent } from './onblur.component';

describe('OnblurComponent', () => {
  let component: OnblurComponent;
  let fixture: ComponentFixture<OnblurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnblurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnblurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
