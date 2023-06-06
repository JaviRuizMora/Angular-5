import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'javier';
  public nameUpper: string = 'JAVIER';
  public fullName: string = 'JAvIer rUiZ';

  public customDate: Date = new Date();

}
