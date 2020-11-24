import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { CrisesModule } from './crisis-center/crises.module';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

const Components = [
  AppComponent,
  CrisisListComponent,
  PageNotFoundComponent,
  ComposeMessageComponent
];
const Modules = [
  BrowserModule,
  FormsModule,
  BrowserAnimationsModule,
  HeroesModule,
  CrisesModule,
  AppRoutingModule
];

@NgModule({
  declarations: [...Components],
  imports: [...Modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
