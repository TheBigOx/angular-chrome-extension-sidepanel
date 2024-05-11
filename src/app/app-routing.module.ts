import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) }, 
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'help', loadChildren: () => import('./pages/help/help.module').then(m => m.HelpModule) },
  { path: 'chat', loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatModule) },
  { path: 'search', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) },
  { path: 'liked', loadChildren: () => import('./pages/liked/liked.module').then(m => m.LikedModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
