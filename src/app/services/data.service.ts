import { Injectable } from '@angular/core';
import { ResourcesModel } from '../models/resourcesModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data:ResourcesModel;

  constructor() { 
    this.data = new ResourcesModel();
  }
}
