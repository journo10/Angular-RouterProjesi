import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

export class ProductsComponent implements OnInit {

  products=products;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    //route params
    // this.route.paramMap.subscribe(params=>{
    //   let id=params.get('id');
    // })

    //query params
    this.route.queryParamMap.subscribe(params=>{
        console.log(params);
    });
    
    let page=this.route.snapshot.queryParamMap.get('id');
    console.log(page); //Bu kısım asenkron şeklindedir.
  }

  //route params
  loadProducts1() {
    this.router.navigate(['products'], { relativeTo: this.route });
  }

  loadProducts2(){
    this.router.navigate(['/products'],{
      queryParams:{
        page:1,
      }
    })
  }
}
