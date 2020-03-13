import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { from } from 'rxjs';
import { ProductsService } from '../products.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(@Inject(ProductsService) private service: ProductsService, private ar: ActivatedRoute) { }

  product: any;

  ngOnInit() {
    //console.log(this.ar.snapshot.params.id);

    let id = this.ar.snapshot.params.id;
    this.service.getproductdetails(id).then(data => {
      console.log(data);
      this.product = data;
    });

  }

}
