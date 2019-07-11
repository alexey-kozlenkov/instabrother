import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPostsFeedComponent } from './photo-posts-feed.component';

describe('PhotoPostsFeedComponent', () => {
  let component: PhotoPostsFeedComponent;
  let fixture: ComponentFixture<PhotoPostsFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoPostsFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPostsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
