import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
  providers: [DataService]
})
export class PersonFormComponent implements OnInit {
	title = 'What\'s Your Fortune';
	submitted = false;
	numbers = "";
	fortuneValue = "";
	model = new Person('', '', null);
	fortuneData: Data[];
	constructor(private dataService: DataService) { }
	getFortuneData(): void {
		this.dataService.getData().then(data => this.fortuneData = data);						
	}

   ngOnInit(): void {
    this.getFortuneData();
  }
	one(last, random) {
		let multiplier = last * random;
		let number = ( multiplier >= 100 ) ? Math.round( multiplier / 10 ) : multiplier;
		return number;
	}
	two(first, random) {
		let multiplier = first * random;
		let number = ( multiplier > 99 ) ? Math.floor( multiplier / 10 ) : Math.floor( 100 / multiplier );
		return number;
	}
	
	three(age, random) {
		let adder = age + random;
		let number = ( adder > 99 ) ? Math.floor( adder / 10 ) : adder;
		return number;
	}
	
	four(age, first, random) {
		let adder = age + first + random;
		let number = ( adder > 99 ) ? Math.floor( adder / 10 ): adder;
		return number;
	}

	five(age, first, last, random) {
		let adder = age + first + last + random;
		let number = ( adder > 99 ) ? Math.floor( adder /10 ) : adder;
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
		let randomFortune = Math.floor(Math.random() * this.fortuneData.length);
		let last = this.model.last.length;
		let first = this.model.first.length;
		let age = parseInt(this.model.age);
		let numberOne = this.one(last, random);
		let numberTwo = this.two(first, randomTwo);
		let numberThree = this.three(age, random);
		let numberFour = this.four(age, first, random);
		let numberFive = this.four(age, last, randomTwo);
		let numberSix = this.five(age, first, last, randomTwo);
		this.numbers = this.luckyNumbers(numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix);
		this.fortuneValue = this.fortuneData[randomFortune].value;
	}
}
