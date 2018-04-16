import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandardComponent } from './standard/standard.component';
import { MainComponent } from './main/main.component';
import { CollageComponent } from './collage/collage.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'standard', component: StandardComponent },
  { path: 'main', component: MainComponent },
  { path: 'collage', component: CollageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
