import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'whatweplay',
    loadChildren: () => import('./whatweplay/whatweplay.module').then(m => m.WhatweplayPageModule)
  },
  {
    path: 'whoweare',
    loadChildren: () => import('./whoweare/whoweare.module').then(m => m.WhowearePageModule)
  },
  {
    path: 'ourschedule',
    loadChildren: () => import('./ourschedule/ourschedule.module').then(m => m.OurschedulePageModule)
  },
  {
    path: 'scheduledetail/:index',
    loadChildren: () => import('./scheduledetail/scheduledetail.module').then( m => m.ScheduledetailPageModule)
  },
  {
    path: 'achievements/:index',
    loadChildren: () => import('./achievements/achievements.module').then(m => m.AchievementsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
