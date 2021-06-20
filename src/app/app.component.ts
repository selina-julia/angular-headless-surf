import { Component, VERSION } from '@angular/core';
import { SurfboardService} from './shared/surfboard-service'
import { Surfboard } from './shared/surfboard';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
