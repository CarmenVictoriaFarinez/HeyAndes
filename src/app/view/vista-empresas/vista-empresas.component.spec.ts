import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEmpresasComponent } from './vista-empresas.component';

describe('VistaEmpresasComponent', () => {
  let component: VistaEmpresasComponent;
  let fixture: ComponentFixture<VistaEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
