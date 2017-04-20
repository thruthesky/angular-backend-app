import { Component } from '@angular/core';
import { TestAll } from 'angular-backend';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor( ta: TestAll ) {
    ta.backend.setBackendUrl('http://backend.org/index.php');
    ta.run();
  }
}
