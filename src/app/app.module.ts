import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './widgets/header/header.component';
import { FooterComponent } from './widgets/footer/footer.component';
import { SliderComponent } from './widgets/slider/slider.component';
import { SidebarComponent } from './widgets/sidebar/sidebar.component';
import { SpecialCategoryComponent } from './widgets/special-category/special-category.component';
import { FlashSaleComponent } from './widgets/flash-sale/flash-sale.component';
import { FooterNavBarComponent } from './widgets/footer-nav-bar/footer-nav-bar.component';
import { LoginComponent } from './pages/login/login.component';
import { SingleProductViewComponent } from './widgets/single-product-view/single-product-view.component';
import { CategoryCardSmallComponent } from './widgets/category-card-small/category-card-small.component';
import { OrdersModule } from './pages/orders/orders.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeSidebarComponent } from './widgets/home-sidebar/home-sidebar.component';
import { TopBarComponent } from './widgets/top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SidebarComponent,
    SpecialCategoryComponent,
    FlashSaleComponent,
    FooterNavBarComponent,
    LoginComponent,
    SingleProductViewComponent,
    CategoryCardSmallComponent,
    HomeComponent,
    HomeSidebarComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
