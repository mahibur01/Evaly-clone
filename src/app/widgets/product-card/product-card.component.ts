import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})

export class ProductCardComponent implements OnInit {
  @Input() inputData: any;
  constructor(public commonService: CommonService) {}

  ngOnInit(): void {}
}
