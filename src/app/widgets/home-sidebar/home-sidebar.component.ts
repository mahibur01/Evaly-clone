import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.css']
})
export class HomeSidebarComponent implements OnInit {

  categoryList:Category[]=[]; 

  constructor(private commonService:CommonService) { 
  }

  ngOnInit(): void {
    this.getCategories();
  }


  getCategories(){
    this.commonService.getCategories().subscribe(data =>{
      this.categoryList = data;
      console.log('categories: ',this.categoryList);
    });
  }

}
