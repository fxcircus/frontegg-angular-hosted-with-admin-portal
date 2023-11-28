import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FronteggAppModule, FronteggComponent } from '@frontegg/angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowAdminPortalComponent } from './show-admin-portal.component';


@NgModule({
  declarations: [AppComponent, DashboardComponent, ShowAdminPortalComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,

    /** 1. Import Frontegg Module **/
    FronteggAppModule.forRoot(
      {
        contextOptions: {
          baseUrl: 'https://[YOUR-SUB-DOMAIN].frontegg.com',
          clientId: '[YOUR-CLIENT-ID]'
        },
        authOptions: {
          disableSilentRefresh: true,
        },
        hostedLoginBox: true,
      }
    ),
  ],

  /** 2. Add Frontetgg Component to your entryComponents **/
  entryComponents: [FronteggComponent],

  bootstrap: [AppComponent],
})
export class AppModule { }
