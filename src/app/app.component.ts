import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router) {
  }

  value: number = 0;

  goToComponentA() {
    this.router.navigate(['component-a'], {queryParams: {value: this.value}});
  }

  reset() {
    this.value = 0;
    this.router.navigate(['/']);
  }
}
