import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.out.emit({event:"random number", payload: Math.random()})
    }, 2000)
  }

  @Input() userData:any;
  
  @Output() out: EventEmitter<any> = new EventEmitter();

}
