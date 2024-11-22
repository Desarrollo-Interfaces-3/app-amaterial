import { Routes } from '@angular/router';
import { EjemploAmaterialComponent } from './ejemplo-amaterial/ejemplo-amaterial.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { CursolistaComponent } from './dashboard/curso/cursolista/cursolista.component';
import { AlumnolistaComponent } from './dashboard/alumno/alumnolista/alumnolista.component';
import { CursodetalleComponent } from './dashboard/curso/cursodetalle/cursodetalle.component';
import { AlumnodetalleComponent } from './dashboard/alumno/alumnodetalle/alumnodetalle.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: "amaterial", component: EjemploAmaterialComponent},
    {path: "login", component: LoginComponent},
    {path: "dashboard", component: DashboardComponent,
        children: [
            {path: "home", component: HomeComponent},
            {path: "curso", component: CursolistaComponent},
            {path: "alumno", component: AlumnolistaComponent},
            {path: "curso/:id", component: CursodetalleComponent},
            {path: "alumno/:id", component: AlumnodetalleComponent}
        ]
    },
    {path: "", redirectTo:"login", pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent}

];
