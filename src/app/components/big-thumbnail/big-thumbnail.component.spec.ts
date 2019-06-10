import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigThumbnailComponent } from './big-thumbnail.component';

describe('BigThumbnailComponent', () => {
  let component: BigThumbnailComponent;
  let fixture: ComponentFixture<BigThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
