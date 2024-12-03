import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddproposalPage } from './addproposal.page';

const routes: Routes = [
  {
    path: '',
    component: AddproposalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddproposalPageRoutingModule {}
