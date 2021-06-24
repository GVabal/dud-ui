import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { CategoriesStripComponent } from './components/categories-strip/categories-strip.component';
import { DudPageComponent } from './dud-page/dud-page.component';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { MediaListComponent } from './components/media-list/media-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesStripComponent,
    DudPageComponent,
    MediaItemComponent,
    MediaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
