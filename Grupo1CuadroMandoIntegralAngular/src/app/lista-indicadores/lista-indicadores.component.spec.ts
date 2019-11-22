import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIndicadoresComponent } from './lista-indicadores.component';

describe('ListaIndicadoresComponent', () => {
  let component: ListaIndicadoresComponent;
  let fixture: ComponentFixture<ListaIndicadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaIndicadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaIndicadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
