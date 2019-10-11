import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Person } from '../person';
import { Data } from '../data';

@Component({
  selector: 'person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent {
	title = 'What\'s Your Fortune';
	submitted = false;
	numbers = "";
	fortuneValue = "";
	model = new Person('', '', null);
	items: Observable<any[]>;
	constructor(db: AngularFirestore) {
	  this.items = db.collection('items').valueChanges();
	}

	multiply(a, b) {
		let multiply = a * b;
		let number = ( multiply >= 100 ) ? Math.round( multiply / 10 ) : multiply;
		return number;
	}
	
	add(a, b, c?) {
		let add = (c) ? a + b + c : a + b;
		let number = ( add >= 100 ) ? Math.round( add / 10 ) : add;
		return number;
	}

	mix(a, b, c, d) {
		let mix = (a + b) * (c + d);
		let number = ( mix >= 100 ) ? Math.round( mix /10 ) : mix;
		return number; 
	}

	luckyNumbers(one, two, three, four, five, six) {
		let numbers = [one, two, three, four, five, six];
		return numbers.join(" ");
	}
	onSubmit() { 
		this.submitted = true;
		let random = Math.round(Math.random() * 50);
		let randomTwo = Math.round(Math.random() * 10);
		let last = this.model.last.length;
		let first = this.model.first.length;
		let age = parseInt(this.model.age);
		if (first == 0 || last == 0 || this.model.age == null) {
			this.numbers = "Please enter a value";
			this.fortuneValue = "Please enter a value";
		} else {
			let one = this.multiply(last, random);
			let two = this.multiply(first, randomTwo);
			let three = this.add(age, random);
			let four = this.add(age, first, random);
			let five = this.add(age, last, randomTwo);
			let six = this.mix(age, first, last, randomTwo);
			this.numbers = this.luckyNumbers(one, two, three, four, five, six);
			this.fortuneValue = 'Testing';
		}
	}
}
