import { Component, OnInit, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-childi',
  templateUrl: './childi.component.html',
  styleUrls: ['./childi.component.css']
})
export class ChildiComponent implements OnInit {

  constructor() { }
  txt:string;
  @Output() getD = new EventEmitter();
  getdata(e){
    this.getD.emit(e);
  }
  @Output() sendT:EventEmitter<string> = new EventEmitter();
  sendTxt(e){
    this.sendT.emit(this.txt);
  }
  ngOnInit() {
  }

}
