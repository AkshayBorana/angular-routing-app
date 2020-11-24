import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';

const components = [
  AdminDashboardComponent,
  AdminComponent,
  ManageCrisesComponent,
  ManageHeroesComponent
];
const modules = [CommonModule, AdminRoutingModule];

@NgModule({
  declarations: [...components],
  imports: [...modules]
})
export class AdminModule {}
