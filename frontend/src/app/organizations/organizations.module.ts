import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpModule } from '@angular/http';
import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationsComponent } from './organizations.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    HttpModule,
    OrganizationsRoutingModule
  ],
  declarations: [
    OrganizationsComponent
  ]
})
export class OrganizationsModule { }
