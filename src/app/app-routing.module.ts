import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashSaleComponent } from './pages/flash-sale/flash-sale.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleProductViewComponent } from './widgets/single-product-view/single-product-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'single-product-view', component: SingleProductViewComponent },
  { path: 'flash-sale', component: FlashSaleComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
