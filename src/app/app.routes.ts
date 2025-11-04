import { Routes } from '@angular/router';
import {Actividades} from './componente/actividades/actividades';
import {Inicio} from './componente/inicio/inicio';
import {Comunidad} from './componente/comunidad/comunidad';
import {Canjear} from './componente/canjear/canjear';
import {Estadisticas} from './componente/estadisticas/estadisticas';
import {Suscripcion} from './componente/suscripcion/suscripcion';
import {
    ActividadesListarAdministradorComponent
} from "./componente/administrador/actividades-listar-administrador/actividades-listar-administrador";
import {
    ActividadesNuevoEditAdministradorComponent
} from "./componente/administrador/actividades-nuevo-edit-administrador/actividades-nuevo-edit-administrador";
import {
    ReportesListarAdministradorComponent
} from "./componente/administrador/reportes-listar-administrador/reportes-listar-administrador";


export const routes: Routes = [
    {path: '', component: Inicio, pathMatch: 'full'},
    {path: 'inicio', component: Inicio},
    {path: 'actividades', component: Actividades},
    {path: 'comunidad', component: Comunidad},
    {path: 'canjear', component: Canjear},
    {path: 'estadisticas', component: Estadisticas},
    {path: 'suscripcion', component: Suscripcion},
// --- 2. AÑADE LAS RUTAS PARA 'NUEVO' Y 'EDITAR' ---
    // --- RUTAS DE ADMINISTRADOR ---
    {
        path: 'admin/actividades', // <-- Cambié esta ruta para que coincida con tu HTML
        component: ActividadesListarAdministradorComponent,
    },

    // --- ¡AÑADE ESTA RUTA QUE FALTABA! ---
    {
        path: 'admin/actividad/nuevo',
        component: ActividadesNuevoEditAdministradorComponent
    },
    // -------------------------------------

    {
        path: 'admin/actividad/editar/:id',
        component: ActividadesNuevoEditAdministradorComponent
    },
    //RUTA DEL REPORTE
    {
        path: 'admin/reportes/empresas', // URL para ver el reporte
        component: ReportesListarAdministradorComponent
    },
];
