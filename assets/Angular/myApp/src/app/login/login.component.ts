import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public value: number;
  @Input() public set loadComponent(data) {
    if (data) {
      this.value = data;
    }
  }
  @Output() emit: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public btnClick(value) {
    this.emit.emit(value);
  }
}
