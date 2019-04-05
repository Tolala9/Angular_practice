import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	showPassword = false;
	detailsDateArr = [];
	
	onCreatePassword() {
		const item = {
			index: this.detailsDateArr.length,
			date: new Date()
		}
		this.detailsDateArr.push(item);
	}
}
