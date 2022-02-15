import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrariaDioAppComponent } from './livraria-dio-app.component';

describe('LivrariaDioAppComponent', () => {
  let component: LivrariaDioAppComponent;
  let fixture: ComponentFixture<LivrariaDioAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivrariaDioAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrariaDioAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
