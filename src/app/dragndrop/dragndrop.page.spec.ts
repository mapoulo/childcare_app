import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DragndropPage } from './dragndrop.page';

describe('DragndropPage', () => {
  let component: DragndropPage;
  let fixture: ComponentFixture<DragndropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragndropPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DragndropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
