import { Routes } from '@angular/router';
import {Actividades} from './componente/actividades/actividades';
import {Inicio} from './componente/inicio/inicio';
import {Comunidad} from './componente/comunidad/comunidad';
import {Canjear} from './componente/canjear/canjear';
import {Estadisticas} from './componente/estadisticas/estadisticas';
import {Suscripcion} from './componente/suscripcion/suscripcion';

export const routes: Routes = [
  {path: '', component: Inicio, pathMatch: 'full'},
  {path: 'inicio', component: Inicio},
  {path: 'actividades', component: Actividades},
  {path: 'comunidad', component: Comunidad},
  {path: 'canjear', component: Canjear},
  {path: 'estadisticas', component: Estadisticas},
  {path: 'suscripcion', component: Suscripcion},
];
