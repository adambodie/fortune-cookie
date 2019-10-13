import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PersonFormComponent } from './person-form.component';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';


describe('PersonFormComponent', () => {
	let comp: PersonFormComponent;
	let fixture: ComponentFixture<PersonFormComponent>;
	let de: DebugElement;
	let el: HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule, AngularFirestore],
			declarations: [ PersonFormComponent ]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PersonFormComponent);
		comp = fixture.componentInstance;  
	});
  
	it('should display original title', async(() => {
		de = fixture.debugElement.query(By.css('h2'));
		el = de.nativeElement;
		fixture.detectChanges();
		expect(el.textContent).toContain("What's Your Fortune");
	}));
	
	
	it('should divide two numbers by 10 only if greater than 100', () => {
		function add(a, b, c?) {
			let add = (c) ? a + b + c : a + b;
			let number = ( add >= 100 ) ? Math.round( add / 10 ) : add;
			return number;
		}
		expect(add(30, 30)).toBe(60);
		expect(add(40, 80)).toBe(12);
		expect(add(20, 30, 10)).toBe(60);
		expect(add(50, 20, 50)).toBe(12);
	});
});
