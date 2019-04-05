import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPassword = false;
	detailsDateArr = [];
	// countDateLogItems = 0;

	onCreatePassword() {
  	// this.detailsDateArr.push(new Date().toString());
  	this.detailsDateArr.push(this.detailsDateArr.length + 1);
  }
}
