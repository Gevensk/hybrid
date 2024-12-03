import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddproposalPageRoutingModule } from './addproposal-routing.module';

import { AddproposalPage } from './addproposal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddproposalPageRoutingModule
  ],
  declarations: [AddproposalPage]
})
export class AddproposalPageModule {}
