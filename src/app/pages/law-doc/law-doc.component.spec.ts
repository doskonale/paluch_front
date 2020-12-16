import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawDocComponent } from './law-doc.component';

describe('LawDocComponent', () => {
  let component: LawDocComponent;
  let fixture: ComponentFixture<LawDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
