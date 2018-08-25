import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent, data: { title: extract('Landing') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProfileRoutingModule { }
