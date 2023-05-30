import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './components/usuario/usuario.component';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import { ProductoComponent } from './components/producto/producto.component';
import {ToolbarModule} from 'primeng/toolbar';
import {FileUploadModule} from 'primeng/fileupload';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { NuevoPedidoComponent } from './components/pedido/nuevo-pedido/nuevo-pedido.component';
import { ListaPedidoComponent } from './components/pedido/lista-pedido/lista-pedido.component';
import { GestionEmpleadosComponent } from './components/gestion-empleados/gestion-empleados.component';
import { TramitesComponent } from './components/tramites/tramites.component';
import { TramitesVehiculoComponent } from './components/tramites-vehiculo/tramites-vehiculo.component';
import { RebajatribuComponent } from './components/tramites/rebajatribu/rebajatribu.component';
import { PdfComponent } from './components/pdf/pdf.component';

@NgModule({
  declarations: [
    PerfilComponent,
    CategoriaComponent,
    UsuarioComponent,
    ProductoComponent,
    NuevoPedidoComponent,
    ListaPedidoComponent,
    GestionEmpleadosComponent,
    TramitesComponent,
    TramitesVehiculoComponent,
    RebajatribuComponent,
    PdfComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    ConfirmDialogModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    RadioButtonModule,
    InputNumberModule
    
  ]
})
export class AdminModule { }
