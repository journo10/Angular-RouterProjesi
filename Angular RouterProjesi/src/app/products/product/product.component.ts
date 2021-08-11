import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  selectedProduct:any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // let id:any = this.route.snapshot.paramMap.get('id');
    // this.selectedProduct = products.find((i) => i.id === id);

    //route params
    this.route.paramMap.subscribe((params) => {
      let id:any = params.get('id');
      this.selectedProduct = products.find((i) => i.id === id);
    });
  }
}
