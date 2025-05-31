import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'users', loadChildren: () => import('./pages/users/users.component').then(m => m.UsersComponent) },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'help', loadChildren: () => import('./pages/help/help.component').then(m => m.HelpComponent) },
  { path: 'chat', loadChildren: () => import('./pages/chat/chat.component').then(m => m.ChatComponent) },
  { path: 'search', loadChildren: () => import('./pages/search/search.component').then(m => m.SearchComponent) },
  { path: 'liked', loadChildren: () => import('./pages/liked/liked.component').then(m => m.LikedComponent) },
  { path: 'settings', loadChildren: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent) },
  { path: 'options', loadChildren: () => import('./pages/options/options.component').then(m => m.OptionsComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
