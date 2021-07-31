import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from "./material.module";

import {AppComponent} from './app.component';
import {CategoryListComponent} from './dud-page/categories-list/category-list.component';
import {DudPageComponent} from './dud-page/dud-page.component';
import {HeaderComponent} from './shared-components/header/header.component';
import {MediaItemComponent} from './dud-page/media-item/media-item.component';
import {MediaItemListComponent} from './dud-page/media-list/media-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryListComponent,
    DudPageComponent,
    MediaItemComponent,
    MediaItemListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
