import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuteurVueComponent } from './auteur-vue.component';

describe('AuteurVueComponent', () => {
  let component: AuteurVueComponent;
  let fixture: ComponentFixture<AuteurVueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuteurVueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuteurVueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
