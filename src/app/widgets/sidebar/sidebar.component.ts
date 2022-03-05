import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList:Category []= [];

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.commonService.getCategories().subscribe(data =>{
      this.categoryList=data;
    });
  }

}
