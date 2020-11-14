import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionalInfoComponent } from './content/additional-info/additional-info.component';
import { MainInfoComponent } from './content/main-info/main-info.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: "", component: MainComponent},
  { path: "main-info", component: MainInfoComponent},
  { path: "additional-info", component: AdditionalInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
