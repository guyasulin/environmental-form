import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { OptionsModel,Ingredients } from '../models/resourcesModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getOrigins(): Observable<any> {
   return this.http.get<OptionsModel[]>('https://my-json-server.typicode.com/galits/testNgsoft/origins')
  }

  getCategories(): Observable<any> {
    return this.http.get<OptionsModel[]>('https://my-json-server.typicode.com/galits/testNgsoft/categories')
  }

   getUnitMeasures(): Observable<any> {
    return this.http.get<OptionsModel[]>('https://my-json-server.typicode.com/galits/testNgsoft/unitMeasures')
   }

   getIngredients(): Observable<any> {
    return this.http.get<Ingredients[]>('https://my-json-server.typicode.com/galits/testNgsoft/ingredients')
   }
}


