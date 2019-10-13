import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { DebugElement }    from '@angular/core';
import { AppComponent } from './app.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { FormsModule }   from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

describe('AppComponent', () => {

  let comp:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [FormsModule, AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule],
      declarations: [
        AppComponent,
        PersonFormComponent
      ],
    }).compileComponents();
  }));
  

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

    

  
});
