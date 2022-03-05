import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductCardComponent } from '../widgets/product-card/product-card.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    ViewProductComponent,
    ListProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ProductCardComponent
  ],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
