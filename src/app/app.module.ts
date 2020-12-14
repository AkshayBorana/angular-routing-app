import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

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
  AuthModule,
  AppRoutingModule
];

@NgModule({
  declarations: [...Components],
  imports: [...Modules],
  providers: [SelectivePreloadingStrategyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
