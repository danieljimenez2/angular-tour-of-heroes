import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { Heroes } from './heroes/heroes-simulados';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HeroDetailComponent } from './componentes/hero-detail/hero-detail.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { HeroSearchComponent } from './componentes/hero-search/hero-search.component';



export const routes: Routes = 
[   {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'heroes', component: HeroesComponent},
    {path: 'dashboard', component: DashboardComponent },
    {path: 'detail/:id', component: HeroDetailComponent },
    {path: 'busqueda', component: HeroSearchComponent},
    {path: 'mensajes', component: MensajesComponent}
];
