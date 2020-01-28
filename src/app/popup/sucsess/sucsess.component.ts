import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sucsess',
  templateUrl: './sucsess.component.html',
  styleUrls: ['./sucsess.component.scss']
})
export class SucsessComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<SucsessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
