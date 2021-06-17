import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsFeedComponent } from './comments-feed.component';

describe('CommentsFeedComponent', () => {
  let component: CommentsFeedComponent;
  let fixture: ComponentFixture<CommentsFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
