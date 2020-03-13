import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {

  constructor() { }

  @Input('product') product;

  ngOnInit() {
  }

}
