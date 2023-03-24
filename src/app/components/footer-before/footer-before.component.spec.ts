import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBeforeComponent } from './footer-before.component';

describe('FooterBeforeComponent', () => {
  let component: FooterBeforeComponent;
  let fixture: ComponentFixture<FooterBeforeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterBeforeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
