import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childl',
  templateUrl: './childl.component.html',
  styleUrls: ['./childl.component.css']
})
export class ChildlComponent implements OnInit {

  constructor() { }
  @Input() arr;
  @Input() txt;
  @Input() counter;
  @Output() changeIndex:EventEmitter<number> = new EventEmitter;
  change(i){
    this.changeIndex.emit(i);
  }
  @Output() delIndex:EventEmitter<number> = new EventEmitter;
  del(i){
    this.delIndex.emit(i);
  }
  ngOnInit() {
  }

}
