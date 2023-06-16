import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDynamicOnblurComponent } from './demo-dynamic-onblur.component';

describe('DemoDynamicOnblurComponent', () => {
  let component: DemoDynamicOnblurComponent;
  let fixture: ComponentFixture<DemoDynamicOnblurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDynamicOnblurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDynamicOnblurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
