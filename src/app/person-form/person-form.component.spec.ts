import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PersonFormComponent } from './person-form.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

describe('PersonFormComponent', () => {
	let comp: PersonFormComponent;
	let fixture: ComponentFixture<PersonFormComponent>;
	let de: DebugElement;
	let el: HTMLElement;

	let dataServiceStub = {
		id: 1,
		value: "Test Value"
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule],
			declarations: [ PersonFormComponent ],
			providers:    [ {provide: DataService, useValue: dataServiceStub } ]
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
		expect(el.textContent).toContain(comp.title);
	}));
	
	it('stub object and injected DataService should not be the same', () => {
		let dataService = TestBed.get(DataService);
		expect(dataServiceStub === dataService).toBe(false);
	});
	
	it('should divide two numbers by 10 only if greater than 100', () => {
		function multiply(a, b) {
			let multiplier = a * b;
			let number = ( multiplier >= 100 ) ? Math.round( multiplier / 10 ) : multiplier;
			return number;
		}
		function add(a, b, c?) {
			let add = (c) ? a + b + c : a + b;
			let number = ( add >= 100 ) ? Math.round( add / 10 ) : add;
			return number;
		}		
		expect(multiply(3, 20)).toBe(60);
		expect(multiply(4, 30)).toBe(12);
		expect(add(30, 30)).toBe(60);
		expect(add(40, 80)).toBe(12);
		expect(add(20, 30, 10)).toBe(60);
		expect(add(50, 20, 50)).toBe(12);
	});
});
