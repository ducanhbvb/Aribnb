import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/user/register-user/register.component';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
<<<<<<< HEAD
import {UserComponent} from './components/user/user.component';
import {PmComponent} from './components/pm/pm.component';
import {AdminComponent} from './components/admin/admin.component';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import {HttpClientModule} from '@angular/common/http';
import {HomeDetailComponent} from './components/home-detail/home-detail.component';
import {HomeListForGuestComponent} from './components/home-list-for-guest/home-list-for-guest.component';

import {RegisterHostComponent} from './components/register-host/register-host.component';
import {AddHouseComponent} from './components/add-house/add-house.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {OrderModule} from 'ngx-order-pipe';
import {BookingComponent} from './components/booking/booking.component';
=======
import {httpInterceptorProviders} from './auth/auth-interceptor';
import {HttpClientModule} from '@angular/common/http';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
import {HomeListForGuestComponent} from './components/user/home-list-for-guest/home-list-for-guest.component';

import { RegisterHostComponent } from './components/host/register-host/register-host.component';
import {AddHouseComponent} from './components/host/add-house/add-house.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {OrderModule} from 'ngx-order-pipe';
import { UserBookingComponent } from './components/user/user-booking/user-booking.component';
import { ListHouseOfHostComponent } from './components/host/list-house-of-host/list-house-of-host.component';
import { ListOrderOfUserComponent } from './components/user/list-order-of-user/list-order-of-user.component';
import { CategoryHouseComponent } from './components/category-house/category-house.component';
import { CancelOrderComponent } from './components/user/list-order-of-user/cancel-order/cancel-order.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { ProfileComponent } from './components/user/profile/profile.component';

// npm install --save @angular/material @angular/cdk @angular/animations
>>>>>>> 87974cb5127cbcb8df3743d5ca842d739f5e0d33


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HomeDetailComponent,
    HomeListForGuestComponent,
    RegisterHostComponent,
    AddHouseComponent,
    FooterComponent,
    HeaderComponent,
<<<<<<< HEAD
    BookingComponent
=======
    UserBookingComponent,
    ListHouseOfHostComponent,
    ListOrderOfUserComponent,
    CategoryHouseComponent,
    CancelOrderComponent,
    ProfileComponent
>>>>>>> 87974cb5127cbcb8df3743d5ca842d739f5e0d33
  ],
  imports: [
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    OrderModule,
    BrowserAnimationsModule,
    ConfirmationPopoverModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
