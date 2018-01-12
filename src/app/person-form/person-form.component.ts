import { Component } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {
	submitted = false;
	numbers = "";
	model = new Person(null, '', '');
	
	onSubmit() { 
		this.submitted = true;
	}
}
