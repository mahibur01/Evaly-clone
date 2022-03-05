import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  
  productList: Product[]=[];

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.viewProducts();
  }

  viewProducts(){
    this.commonService.viewProducts().subscribe(data=> {
      this.productList = data;
    });
  }


}
