import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasBasicasComponent } from './listas-basicas.component';

describe('ListasBasicasComponent', () => {
  let component: ListasBasicasComponent;
  let fixture: ComponentFixture<ListasBasicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasBasicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListasBasicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
