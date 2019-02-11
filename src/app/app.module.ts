import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SubPageComponent } from './pages/sub-page/sub-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { AppStoreService } from './app.store.service';
import { TestingService } from './services/testing.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SubPageComponent,
    SearchBoxComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [
    AppStoreService,
    TestingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
