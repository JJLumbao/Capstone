import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RatedatePage } from './ratedate.page';

describe('RatedatePage', () => {
  let component: RatedatePage;
  let fixture: ComponentFixture<RatedatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatedatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RatedatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
