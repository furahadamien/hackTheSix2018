import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { OrganizationsComponent } from './organizations.component';

const routes: Routes = [
  { path: 'organizations', component: OrganizationsComponent, data: { title: extract('Organizations') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OrganizationsRoutingModule { }
