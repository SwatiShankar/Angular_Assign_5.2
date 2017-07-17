import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template :`<div class="form-group">
  				<input type="text" name="username" placeholder="Username"><br>
  				<button type="submit" class="btn btn-success">Login</button>
  			</div>`
})
export class AppComponent {
  
}