import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth/auth.guard';
import { loginGuard } from './guards/login/login.guard';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/posts/posts.component').then((m) => m.PostsComponent),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/auth.component').then((m) => m.AuthComponent),
    canActivate: [loginGuard],
  },
  {
    path: 'post/:id',
    loadComponent: () =>
      import('./pages/post/post.component').then((m) => m.PostComponent),
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
