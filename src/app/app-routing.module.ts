import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {PortfolioComponent} from "./app/portfolio/portfolio.component";

const routes: Routes = [
  { path: '**', redirectTo: '' }, //não importa o que o usuario digite, sempre vai redirecionar para o home
  { path: '', component: PortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
