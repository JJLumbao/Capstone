import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatehistoryPage } from './datehistory.page';

describe('DatehistoryPage', () => {
  let component: DatehistoryPage;
  let fixture: ComponentFixture<DatehistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatehistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatehistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
