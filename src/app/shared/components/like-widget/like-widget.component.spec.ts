import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      /* declarations: [LikeWidgetComponent],
      imports: [FontAwesomeModule],
      providers: [UniqueIdService] */ // primeiro faz o teste, depois o componente
      imports: [LikeWidgetModule] // primeiro cria o componente, depois faz o teste
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent)
  });

  it('Should create component', () => {
    const instance = fixture.componentInstance;

    expect(instance).toBeTruthy();
  });

  it('Should auto generate ID when id input property is missing', () => {
    const instance = fixture.componentInstance;

    fixture.detectChanges();

    expect(instance.id).toBeTruthy();
  })

  it('Should NOT generate ID when id input property is present', () => {
    const instance = fixture.componentInstance;
    const someId = 'someId';
    instance.id = someId;

    fixture.detectChanges();

    expect(instance.id).toBe(someId);
  })
});
