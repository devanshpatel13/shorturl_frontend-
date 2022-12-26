import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateshorturlComponent } from './createshorturl.component';

describe('CreateshorturlComponent', () => {
  let component: CreateshorturlComponent;
  let fixture: ComponentFixture<CreateshorturlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateshorturlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateshorturlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
