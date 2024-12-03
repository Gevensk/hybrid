import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
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
  },
  {
    path: 'teams/:index',
    loadChildren: () => import('./teams/teams.module').then(m => m.TeamsPageModule)
  },
  {
    path: 'teamdetail/:index/:memberindex',
    loadChildren: () => import('./teamdetail/teamdetail.module').then( m => m.TeamdetailPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'proposallist',
    loadChildren: () => import('./proposallist/proposallist.module').then( m => m.ProposallistPageModule)
  },
  {
    path: 'addproposal',
    loadChildren: () => import('./addproposal/addproposal.module').then( m => m.AddproposalPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
