import { Component, OnInit, ViewChild } from "@angular/core";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { MatStepper } from "@angular/material";
import { SucsessComponent } from './popup/sucsess/sucsess.component';
import {MatDialog} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';
import { CommodityDetailsComponent } from './commodity-details/commodity-details.component';
import { SavingDetailsComponent } from './saving-details/saving-details.component';

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.scss"],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class PagesComponent implements OnInit {
  public showConfirmationBtn: boolean;
  public showNextBtn: boolean = true;
  public currentPages:number[];

  @ViewChild("stepper", { static: true }) stepper: MatStepper;

  @ViewChild(ApplicantDetailsComponent, { static: true }) applicant: ApplicantDetailsComponent;
  @ViewChild(CommodityDetailsComponent, { static: true }) commodity: CommodityDetailsComponent;
  @ViewChild(SavingDetailsComponent, { static: true }) saving: SavingDetailsComponent;
  
  constructor(public dialog: MatDialog) {}

  ngOnInit() {

  }

  get formStepApplicant() {
      return this.applicant ? this.applicant.formStepApplicant : null;
  }

  get formStepCommodity() {
    return this.commodity ? this.commodity.formStepCommodity : null;
  }

  get formStepSaving() {
    return this.saving ? this.saving.formStepSaving : null;
  }

  nextPage() {
    this.stepper.next();
    if (this.stepper.selectedIndex == 2) {
      this.showNextBtn = false;
      this.showConfirmationBtn = true;
    }
  }

  prevPage(count) {
    for (let i = 0; i < count; i++) {
      this.stepper.previous();
    }
    this.showNextBtn = true;
    this.showConfirmationBtn = false;
  }

  stepSave(index: number) {
    if (index == 3) {
      this.showNextBtn = false;
      this.showConfirmationBtn = true;
    }
  }

  reset() {
    this.stepper.reset();
    this.showNextBtn = true;
    this.showConfirmationBtn = false;
    const dialogRef = this.dialog.open(SucsessComponent, {
      width: "250px"
    });
  }
}
