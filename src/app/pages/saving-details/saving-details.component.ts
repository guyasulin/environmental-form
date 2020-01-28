import { DataService } from './../../services/data.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-saving-details',
  templateUrl: './saving-details.component.html',
  styleUrls: ['./saving-details.component.scss']
})
export class SavingDetailsComponent implements OnInit {

  @Output() edit =  new EventEmitter();

  constructor(public dataService:DataService) { }

  ngOnInit() {
  }

  btnEdit(count) {
    this.edit.emit(count)
  }
}
