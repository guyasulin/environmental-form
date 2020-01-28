export class ApplicantModel {
  constructor(){
    this.sourceObjects = new OptionsModel();
  }
  supplierName: string;
  sourceObjects: OptionsModel;
  companyNumber: string;
  fullName: string;
  identityCard: string;
  email: string;
  phone: string;
  telephone: string;
  faxNumber: string;
}

export class CommodityModel {
  constructor(){
    this.categorie = new OptionsModel();
    this.unitMeasure = new Array() as Array<Ingredients>
    this.ingredients = new Array() as Array<Ingredients>
  }
  itemName: string;
  categorie: OptionsModel;
  designateItem: string;
  quantityRequested:string;
  unitMeasure: Array<Ingredients>
  ingredients: Array<Ingredients>;
}

export class ResourcesModel {
  constructor(){
    this.commodity = new CommodityModel();
    this.applicant = new ApplicantModel();
  }
  commodity:CommodityModel;
  applicant:ApplicantModel;
}

export class OptionsModel {
  id: number;
  title: string;
}

export class Ingredients {
  id: string;
  inventoryNumber: string;
  inventoryName: string;
  casNumber: string;
  molecularFormula: string;
}


  // nameShipmentReceiver: string;
  // shipmentReceiversPhoneNumber: string;
  // address: string;
  // volume: string;
  // solicitedPass: string;
  // MonetaryValueMerchandise: string;
  // driverName: string;
  // driversId: string;