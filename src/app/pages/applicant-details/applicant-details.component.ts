import { DataService } from './../../services/data.service';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { OptionsModel } from 'src/app/models/resourcesModel';
import {  FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.scss']
})
export class ApplicantDetailsComponent implements OnInit {

  public origins$: Observable<OptionsModel[]>;
  public form: FormGroup;

  constructor(private httpService:HttpService,public dataService:DataService,private fb: FormBuilder) { }

  ngOnInit() {
    this.origins$ = this.httpService.getOrigins();

    this.form = this.fb.group({
      supplierName: ['', [
        Validators.required
      ]],
      companyNumber: ['', [
        Validators.required,
      ]],
      fullName: ['', [
        Validators.required, Validators.minLength(2)
      ]],
      identityCard: ['', [
        Validators.required, Validators.maxLength(9),
      ]],
      email: ['', [
        Validators.required,Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]],
      phone: ['', [
        Validators.required, Validators.maxLength(10)
      ]],
      telephone: ['', [
        Validators.required, Validators.maxLength(9),
      ]],
      faxNumber: ['', [
      ]],
    });
  }

  optionSelected(event) {
    this.dataService.data.applicant.sourceObjects = event.option.value;
  }

  get supplierName() {
    return this.form.get('supplierName');
  }
  get fullName() {
    return this.form.get('fullName');
  }

  get companyNumber() {
    return this.form.get('companyNumber');
  }

  get identityCard() {
    return this.form.get('identityCard');
  }
  get email() {
    return this.form.get('email');
  }
  get phone() {
    return this.form.get('phone');
  }
  get telephone() {
    return this.form.get('telephone');
  }
}
