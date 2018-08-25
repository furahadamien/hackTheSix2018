import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    LandingRoutingModule
  ],
  declarations: [
    LandingComponent
  ]
})
export class LandingModule { }
