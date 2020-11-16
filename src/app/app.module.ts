import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
// import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';

const Components = [
  AppComponent,
  CrisisListComponent,
  // HeroListComponent,
  PageNotFoundComponent
];
const Modules = [HeroesModule];

@NgModule({
  declarations: [...Components],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ...Modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
