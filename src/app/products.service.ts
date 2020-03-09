import { Injectable } from '@angular/core';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  dummydata = [
    {
      "name" 		: "Smart Device",
      "offer"		: "Extra 5% off",
      "category": "Electronics",
      "price"		: 500,
      "description"	: "Get set to game, capture, and watch your favourite content on the POCO X2 smartphone. Featuring the RealityFlow display",
      "image"		: "product-img/product-2.jpeg"
    },{
      "name" 		: "Shoes",
      "offer"		: "Extra 15% off",
      "category": "mens",
      "price"		: 3000,
      "description"	: "Get set to game, capture, and watch your favourite content on the POCO X2 smartphone. Featuring the RealityFlow display",
      "image"		: "product-img/product-1.jpeg"
    },{
      "name" 		: "Mobile",
      "offer"		: "Extra 10% off",
      "category": "Electronics",
      "price"		: 15000,
      "description"	: "Get set to game, capture, and watch your favourite content on the POCO X2 smartphone. Featuring the RealityFlow display",
      "image"		: "product-img/product-1.jpeg"
    },
  ]

  constructor() { }

  getProducts(){
    let data = new Promise(function(){
      resolve()
    })
  }
}
