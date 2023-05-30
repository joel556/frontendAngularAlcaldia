import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/error404/error404.component';
import { AuthGuard } from './guards/auth.guard';
import { InicioComponent } from './inicio/inicio.component';
import { LayoutComponent } from './layout-pagina/layout.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { DocumentacionComponent } from './auth/components/registro/documentacion/documentacion.component';
import { RegistroComponent } from './auth/components/registro/registro.component';
import { RadicatoriaComponent } from './auth/components/registro/radicatoria/radicatoria.component';
import { DescuentoComponent } from './auth/components/registro/descuento/descuento.component';
import { DuplicadoComponent } from './auth/components/registro/duplicado/duplicado.component';
import { DupropiedadComponent } from './auth/components/registro/dupropiedad/dupropiedad.component';
import { InscripcionComponent } from './auth/components/registro/inscripcion/inscripcion.component';
import { InsfacturaComponent } from './auth/components/registro/insfactura/insfactura.component';
import { DatostecnicosComponent } from './auth/components/registro/datostecnicos/datostecnicos.component';
import { ModestructuraComponent } from './auth/components/registro/modestructura/modestructura.component';
import { TrespecialComponent } from './auth/components/registro/trespecial/trespecial.component';
import { TrnaturalComponent } from './auth/components/registro/trnatural/trnatural.component';
import { TrjuridicaComponent } from './auth/components/registro/trjuridica/trjuridica.component';
import { ValorComponent } from './auth/components/registro/valor/valor.component';
import { TablasComponent } from './auth/components/registro/tablas/tablas.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
        // canActivate: [AuthGuard]
      },
      {
        path: 'registro/documentacion',
        component: DocumentacionComponent,
      },
      {
        path: 'registro/radicatoria',
        component: RadicatoriaComponent,
      },
      {
        path: 'registro/descuento',
        component: DescuentoComponent,
      },
      {
        path: 'registro/duplicado',
        component: DuplicadoComponent,
      },
      {
        path: 'registro/dupropiedad',
        component: DupropiedadComponent,
      },
      {
        path: 'registro/inscripcion',
        component: InscripcionComponent,
      },
      {
        path: 'registro/insfactura',
        component: InsfacturaComponent,
      },
      {
        path: 'registro/datostecnicos',
        component: DatostecnicosComponent,
      },
      {
        path: 'registro/modestructura',
        component: ModestructuraComponent,
      },
      {
        path: 'registro/trespecial',
        component: TrespecialComponent,
      },
      {
        path: 'registro/trnatural',
        component: TrnaturalComponent,
      },
      {
        path: 'registro/trjuridica',
        component: TrjuridicaComponent,
      },
      {
        path: 'registro/valor',
        component: ValorComponent,
      },
      {
        path: 'registro/tablas',
        component: TablasComponent,
      },
      
      
      
      {
        path: 'registro',
        component: RegistroComponent,
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
    ]
  },
  {
    path: 'admin',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard]
      }
    ]

    
  },
  {
    path: 'no-encontrado-404',
    component: Error404Component
  },
  {path: '**', redirectTo: '/no-encontrado-404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
