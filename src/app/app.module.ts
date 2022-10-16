
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { HeaderModule } from './header/header.module';
import { angularaMaterials } from './custom-svg/angular-materials';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    HeaderModule,
    angularaMaterials


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
