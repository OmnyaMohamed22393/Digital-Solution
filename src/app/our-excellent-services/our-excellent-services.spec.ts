import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurExcellentServices } from './our-excellent-services';

describe('OurExcellentServices', () => {
  let component: OurExcellentServices;
  let fixture: ComponentFixture<OurExcellentServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurExcellentServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurExcellentServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
