import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildItemsComponent } from './child-items.component';

describe('ChildItemsComponent', () => {
  let component: ChildItemsComponent;
  let fixture: ComponentFixture<ChildItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
