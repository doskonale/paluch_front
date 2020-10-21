import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanduseComponent } from './landuse.component';

describe('LanduseComponent', () => {
  let component: LanduseComponent;
  let fixture: ComponentFixture<LanduseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanduseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanduseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
