import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

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
