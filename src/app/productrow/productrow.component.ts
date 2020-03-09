import { Component, OnInit, Inject } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productrow',
  templateUrl: './productrow.component.html',
  styleUrls: ['./productrow.component.css']
})
export class ProductrowComponent implements OnInit {

  constructor(@Inject(ProductsService) private service: ProductsService) { }

  ngOnInit() {
  }

  getproducts(){
    this.service.getProducts()
  }

}
