import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';

const routes: Routes = [
  { path: '', redirectTo: '/colors', pathMatch: 'full' },
  { path: 'colors', component: ColorsComponent },
  { path: 'colors/:type', component: ColorsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
