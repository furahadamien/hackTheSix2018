import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent, data: { title: extract('Landing') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LandingRoutingModule { }
