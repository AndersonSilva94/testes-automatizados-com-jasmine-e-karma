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

  it('Should auto generate ID when id input property is missing', () => {

    fixture.detectChanges();

    expect(component.id).toBeTruthy();
  })

  it('Should NOT generate ID when id input property is present', () => {
    const someId = 'someId';
    component.id = someId;

    fixture.detectChanges();

    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidgetComponent.prototype.like.name} should trigger emission when called`, () => {
    fixture.detectChanges();
    component.liked.subscribe(() => { // primeiro registro a ação que vai testar a expectativa
      expect(true).toBeTrue();
    })
    component.like() // depois chama o método que vai disparar a output property
  })
});
