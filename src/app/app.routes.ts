import { Routes } from '@angular/router';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { FormsModule } from '@angular/forms';
import { Punto3FormularioComponent } from './components/punto3-formulario/punto3-formulario.component';

export const routes: Routes = [
    {path:'punto1', component:Punto1Component },
    {path: 'punto2', component:Punto2Component},
    {path: 'punto3', component: Punto3Component},
    {path: 'punto3-formulario', component: Punto3FormularioComponent},
    {path: 'punto3-formulario/:id', component: Punto3FormularioComponent}
];
