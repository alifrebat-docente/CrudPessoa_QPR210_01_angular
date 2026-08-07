// Importa as ferramentas de teste do Angular.
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importa o componente que será testado.
import { HomeComponent } from './home-component';

// Inicia o conjunto de testes do HomeComponent.
describe('HomeComponent', () => {

  // Declara a variável que armazenará a instância do componente.
  let component: HomeComponent;

  // Declara a variável que controla o ambiente de teste.
  let fixture: ComponentFixture<HomeComponent>;

  // Executa antes de cada teste.
  beforeEach(async () => {

    // Configura o módulo de testes.
    await TestBed.configureTestingModule({

      // Importa o componente que será testado.
      imports: [HomeComponent],

    }).compileComponents();

    // Cria uma instância do componente.
    fixture = TestBed.createComponent(HomeComponent);

    // Obtém a instância do componente.
    component = fixture.componentInstance;

    // Aguarda a inicialização completa do componente.
    await fixture.whenStable();
  });

  // Teste para verificar se o componente foi criado corretamente.
  it('should create', () => {

    // Verifica se a instância do componente existe.
    expect(component).toBeTruthy();

  });

});