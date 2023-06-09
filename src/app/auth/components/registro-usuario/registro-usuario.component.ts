import { Component, NgModule } from '@angular/core';
import { RegistroUsuarioService } from 'src/app/core/services/registro-usuario.service';
import { InputTextModule } from 'primeng/inputtext';

import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent {
  usuario = {
    name: '',
    email: '',
    password: '',
    c_password: ''
  };

  constructor(private registroUsuarioService: RegistroUsuarioService) {}

  registrarUsuario() {
    this.registroUsuarioService.registrarUsuario(this.usuario)
      .subscribe(
        response => {
          console.log('Usuario registrado correctamente');
          // Aquí puedes agregar lógica adicional, como mostrar una notificación de éxito
        },
        error => {
          console.error('Error al registrar usuario:', error);
          // Aquí puedes manejar el error, mostrar un mensaje de error, etc.
        }
      );
  }
}

@NgModule({
  imports: [
    // Otros módulos importados aquí
    ReactiveFormsModule
  ],
  // Otros metadatos del módulo
})
export class AppModule { }