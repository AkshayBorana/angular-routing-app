import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Setting up components for routing...
import { CrisisListComponent } from './crisis-list/crisis-list.component';
// import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisListComponent
  },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent
  // },
  // {
  //   path: '',
  //   // This is an absolute redirect, as the redirect to property starts with '/' in it's path '/heroes'...
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
