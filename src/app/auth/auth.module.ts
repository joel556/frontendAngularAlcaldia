import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"
import { CoreModule } from '../core/core.module';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { DocumentacionComponent } from './components/registro/documentacion/documentacion.component';
import { RadicatoriaComponent } from './components/registro/radicatoria/radicatoria.component';
import { DescuentoComponent } from './components/registro/descuento/descuento.component';
import { DuplicadoComponent } from './components/registro/duplicado/duplicado.component';
import { DupropiedadComponent } from './components/registro/dupropiedad/dupropiedad.component';
import { InscripcionComponent } from './components/registro/inscripcion/inscripcion.component';
import { InsfacturaComponent } from './components/registro/insfactura/insfactura.component';
import { DatostecnicosComponent } from './components/registro/datostecnicos/datostecnicos.component';
import { ModestructuraComponent } from './components/registro/modestructura/modestructura.component';
import { TrespecialComponent } from './components/registro/trespecial/trespecial.component';
import { TrnaturalComponent } from './components/registro/trnatural/trnatural.component';
import { TrjuridicaComponent } from './components/registro/trjuridica/trjuridica.component';
import { ValorComponent } from './components/registro/valor/valor.component';
import { TablasComponent } from './components/registro/tablas/tablas.component';


@NgModule({
  declarations: [// componentes,
    LoginComponent, 
    RegistroComponent, 
    DocumentacionComponent, RadicatoriaComponent, DescuentoComponent, DuplicadoComponent, DupropiedadComponent, InscripcionComponent, InsfacturaComponent, DatostecnicosComponent, ModestructuraComponent, TrespecialComponent, TrnaturalComponent, TrjuridicaComponent, ValorComponent, TablasComponent, 

    
  ],
  imports: [ // modulos
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule
  ]
})
export class AuthModule { }
