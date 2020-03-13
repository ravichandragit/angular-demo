import { Component, OnInit, Inject } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productrow',
  templateUrl: './productrow.component.html',
  styleUrls: ['./productrow.component.css']
})
export class ProductrowComponent implements OnInit {

  constructor(@Inject(ProductsService) private service: ProductsService) { }

  productlist = []

  ngOnInit() {
    this.service.getProducts().then(data=>{
      console.log(data);
      let d:any = data
      this.productlist = d;
    })
  }

}
