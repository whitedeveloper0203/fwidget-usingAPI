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
  placement = 'search';
  maxItems = 4;
  pageSize = 10;
  numbers = [];
  totalPage = 1;

  widgets: Widget[] = [];

  constructor(private apiService: APIService) {
    this.getWidgetPlacement();
  }

  getWidgetPlacement() {
    
    let countWidget = this.maxItems * this.pageSize * this.totalPage;
    this.numbers = Array(countWidget).fill(-1, 0, countWidget).map((x,i)=>i);

    this.apiService.getWidgets(this.placement, this.maxItems, this.pageSize, this.totalPage).subscribe( res => {
      this.widgets = this.widgets.concat(res);
    })
  }

  isInWidgetPlace(place) {
    for(let index in this.widgets) {
      if(this.widgets[index].place == place)
        return index;
    }
    return -1;
  }

  onScrollEnd() {
    this.totalPage ++;
    this.getWidgetPlacement();
  }
}
