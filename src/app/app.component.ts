import { Component } from '@angular/core';
import { APIService } from './_services';
import { Widget } from './_models'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fwidget';

  widgets: Widget[] = [];

  constructor(private apiService: APIService) {
    this.apiService.get_widgets('search', 4, 10).subscribe( res => {
      this.widgets = res;
      console.log(this.widgets);
    })
  }
}
