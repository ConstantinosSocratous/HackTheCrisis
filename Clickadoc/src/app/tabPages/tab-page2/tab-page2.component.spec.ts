import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabPage2Component } from './tab-page2.component';

describe('TabPage2Component', () => {
  let component: TabPage2Component;
  let fixture: ComponentFixture<TabPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPage2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
