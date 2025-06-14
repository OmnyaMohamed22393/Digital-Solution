import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeSection } from './subscribe-section';

describe('SubscribeSection', () => {
  let component: SubscribeSection;
  let fixture: ComponentFixture<SubscribeSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscribeSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
