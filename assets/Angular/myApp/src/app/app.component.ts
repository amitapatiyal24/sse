import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public componentConfig: Array<any> = [1, 2, 3, 4];

  ngOnInit() {

  }
  public toggle(value) {
    const index = this.componentConfig.indexOf(value);
    if (index > -1) {
      this.componentConfig.splice(index, 1);
    }else {
      this.componentConfig.push(value);
      this.componentConfig.sort(function(a, b){return a - b ; });
    }
  }

}
