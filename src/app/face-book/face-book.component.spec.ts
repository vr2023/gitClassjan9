import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceBookComponent } from './face-book.component';

describe('FaceBookComponent', () => {
  let component: FaceBookComponent;
  let fixture: ComponentFixture<FaceBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
