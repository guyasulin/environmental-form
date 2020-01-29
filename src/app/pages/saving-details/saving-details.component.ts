import { DataService } from './../../services/data.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-saving-details',
  templateUrl: './saving-details.component.html',
  styleUrls: ['./saving-details.component.scss']
})
export class SavingDetailsComponent implements OnInit {

  @Output() edit =  new EventEmitter();
  public formStepSaving: FormGroup;
  
  constructor(public dataService:DataService,private fb: FormBuilder) { }

  ngOnInit() {
    this.formStepSaving = this.fb.group({
      supplierName: ['', [
        Validators.required,
      ]],
    });
  }

  btnEdit(count) {
    this.edit.emit(count)
  }
}
