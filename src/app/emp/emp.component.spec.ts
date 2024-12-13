import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpComponent } from './emp.component';
import { of } from 'rxjs';
import { ApiService } from '../shared/api.service';

class MocaApiService {
  getEmployees() {
    return of([
      { id: 1, name: 'Erős Lajos', city: 'Pécs', salary: 300 },
      { id: 2, name: 'Szi István', city: 'Pécs', salary: 100 },
    ]);
  }
}

describe('EmpComponent', () => {
  let component: EmpComponent;
  let fixture: ComponentFixture<EmpComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpComponent],
      providers: [{ provide: ApiService, useClass: MocaApiService }],
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create empb-en', () => {
    expect(component).toBeTruthy();
  });

  it('should get employees', () => {
    expect(component.employees.length).toBe(2);
  });

  it('rederli a sablonfájlba', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('li').length).toBe(2);
  })
  it('A rederlt listában az első elem Erős Lajos', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('li').textContent).toContain('Erős Lajos');
  })
});
