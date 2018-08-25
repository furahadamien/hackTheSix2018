import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationsComponent } from './organizations.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    OrganizationsRoutingModule
  ],
  declarations: [
    OrganizationsComponent
  ]
})
export class OrganizationsModule { }
