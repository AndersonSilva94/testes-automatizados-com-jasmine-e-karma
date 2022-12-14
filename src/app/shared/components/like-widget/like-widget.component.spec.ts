import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      /* declarations: [LikeWidgetComponent],
      imports: [FontAwesomeModule],
      providers: [UniqueIdService] */ // primeiro faz o teste, depois o componente
      imports: [LikeWidgetModule] // primeiro cria o componente, depois faz o teste
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {

    expect(component).toBeTruthy();
  });

  it('Should auto-generate ID during ngOnInit when (@Input id) is NOT assinged', () => {

    fixture.detectChanges();

    expect(component.id).toBeTruthy();
  })

  it('Should NOT auto-generate ID during ngOnInit when (@Input id) is assinged', () => {
    const someId = 'someId';
    component.id = someId;

    fixture.detectChanges();

    expect(component.id).toBe(someId);
  });

  /* it(`#${LikeWidgetComponent.prototype.like.name} should trigger emission when called`, done => {
    fixture.detectChanges();
    component.liked.subscribe(() => { // primeiro registro a ação que vai testar a expectativa
      expect(true).toBeTrue();
      done(); // é de garantia que testes assíncronos (com subscribe e observables) tenham o done ao final para garantir que será realizado com sucesso
    })
    component.like() // depois chama o método que vai disparar a output property
  }) */

  it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`, () => {
    spyOn(component.liked, 'emit'); // observa um método e faz referência ao método original (cria uma 'cópia') - modifica o método
    fixture.detectChanges();
    component.like();

    expect(component.liked.emit).toHaveBeenCalled();
  })
});
