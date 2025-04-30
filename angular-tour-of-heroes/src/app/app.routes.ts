import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { Heroes } from './heroes/heroes-simulados';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HeroDetailComponent } from './componentes/hero-detail/hero-detail.component';
export const routes: Routes = 
[   {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'heroes', component: HeroesComponent},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
];
