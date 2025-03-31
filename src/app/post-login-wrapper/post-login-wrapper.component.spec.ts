import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLoginWrapperComponent } from './post-login-wrapper.component';

describe('PostLoginWrapperComponent', () => {
  let component: PostLoginWrapperComponent;
  let fixture: ComponentFixture<PostLoginWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostLoginWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostLoginWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
