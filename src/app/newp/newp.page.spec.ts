import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewpPage } from './newp.page';

describe('NewpPage', () => {
  let component: NewpPage;
  let fixture: ComponentFixture<NewpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
