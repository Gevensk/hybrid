import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatweplayPage } from './whatweplay.page';

const routes: Routes = [
  {
    path: '',
    component: WhatweplayPage
  },
  {
    path: 'teams',
    loadChildren: () => import('./teams/teams.module').then( m => m.TeamsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatweplayPageRoutingModule {}
