import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const Components = [
  AppComponent,
  CrisisListComponent,
  PageNotFoundComponent
];
const Modules = [BrowserModule, FormsModule, BrowserAnimationsModule, HeroesModule];

@NgModule({
  declarations: [...Components],
  imports: [...Modules, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
