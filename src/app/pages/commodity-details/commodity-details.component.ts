import { Ingredients } from 'src/app/models/resourcesModel';
import { OptionsModel } from 'src/app/models/resourcesModel';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-commodity-details',
  templateUrl: './commodity-details.component.html',
  styleUrls: ['./commodity-details.component.scss']
})
export class CommodityDetailsComponent implements OnInit {

  public categories$: Observable<OptionsModel[]>;
  public unitMeasures$: Observable<OptionsModel[]>;
  public ingredients$: Observable<Ingredients[]>;
  public ingredientInput:string;
  public form: FormGroup;
  public showTable:boolean = false;

  constructor(private httpService:HttpService,public dataService:DataService,private fb: FormBuilder) { }

  ngOnInit() {
    this.unitMeasures$ = this.httpService.getUnitMeasures();
    this.categories$ = this.httpService.getCategories();
    this.ingredients$ = this.httpService.getIngredients();

    this.form = this.fb.group({
      itemName: ['', [
        Validators.required,
      ]],
      designateItem: ['', [
        Validators.required,
      ]],
      ingredient: ['', [
        Validators.required,
      ]],
      quantityRequested: ['', [
        Validators.required,
      ]],
    });
  }

  addIngredient(event) {
    this.dataService.data.commodity.ingredients.push(event.option.value); 
      this.showTable = true;
    setTimeout(() => {
      this.ingredientInput = ''
    }, 0);
  }

  remove(index) {
    this.dataService.data.commodity.ingredients.splice(index, 1);
    if (this.dataService.data.commodity.ingredients.length == 0) {
      this.showTable = false;
    }
  }

  selectCategorie(event) {    
    this.dataService.data.commodity.categorie = event.option.value;
  }

  selectUnitMeasure(event) {    
    this.dataService.data.commodity.unitMeasure = event.option.value;
  }

  get itemName() {
    return this.form.get('itemName');
  }
  get designateItem() {
    return this.form.get('designateItem');
  }
}

