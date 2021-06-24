import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DudPageComponent} from "./dud-page/dud-page.component";

const routes: Routes = [
  {path: '', component: DudPageComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
