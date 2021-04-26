import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialAngularComponent } from './tutorialAngular.component';

describe('TutorialAngularComponent', () => {
  let component: TutorialAngularComponent;
  let fixture: ComponentFixture<TutorialAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
