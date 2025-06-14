import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatMakeUsDifferent } from './what-make-us-different';

describe('WhatMakeUsDifferent', () => {
  let component: WhatMakeUsDifferent;
  let fixture: ComponentFixture<WhatMakeUsDifferent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatMakeUsDifferent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatMakeUsDifferent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
