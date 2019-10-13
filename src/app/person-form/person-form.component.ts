import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Person } from '../person';

@Component({
	selector: 'person-form',
	templateUrl: './person-form.component.html',
	styleUrls: ['./person-form.component.css'],
})

export class PersonFormComponent {
	
	items: Observable<any[]>;
	random: number = Math.round(Math.random() * 20);
	constructor(db: AngularFirestore) {
		this.items = db.collection('items', ref => ref.where('id', '==', Math.round(this.random))).valueChanges();
	}

	submitted = false;
	incomplete: boolean;
	numbers = "";
	model = new Person('', '', null);

	shuffle(array: Array<any>) {
		let currentIndex = array.length, temporaryValue, randomIndex;	
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
			}
		return array;
	}

	add(a: any, b: any, c?: any) {
		let add = (c) ? a + b + c : a + b;
		let number = ( add >= 100 ) ? Math.round( add / 10 ) : add;
		return number;
	}

	mix(a: any, b: any, c: any, d: any) {
		let mix = (a + b) * (c + d);
		let number = ( mix >= 100 ) ? Math.round( mix /10 ) : mix;
		return number; 
	}

	luckyNumbers(one: any, two: any, three: any, four: any, five: any, six: any) {
		let numbers = this.shuffle([one, two, three, four, five, six]);
		return numbers.join(" ");
	}
	reset() {
		this.submitted = false;
		this.numbers = "";
		this.model = new Person('', '', null);
		this.random = Math.round(Math.random() * 20);
	}
	onSubmit() { 
		this.submitted = true;
		this.incomplete = false;
		let last = this.model.last.length;
		let first = this.model.first.length;
		let age = parseInt(this.model.age);

		let random = Math.round(Math.random() * age);
		if (first == 0 || last == 0 || this.model.age == null) {
			this.incomplete = true;
			this.numbers = "Please enter a value";
		} else {
			let one = random + Math.round(Math.random() * first);
			let two = random + Math.round(Math.random() * last);
			let three = random + Math.round(Math.random() * random);
			let four = this.add(age, first, random);
			let five = this.add(age, last, random);
			let six = this.mix(age, first, last, random);
			this.numbers = this.luckyNumbers(one, two, three, four, five, six);
		}
	}
}
