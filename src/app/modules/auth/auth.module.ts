import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Para manejar rutas internas del módulo

// Componentes del módulo
import { LoginComponent } from '../auth/login/login.component'; // Correcto
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent, // Declara los componentes de este módulo
    RegisterComponent,
  ],
  imports: [
    CommonModule, // Proporciona directivas básicas como ngIf y ngFor
    FormsModule, // Soporte para formularios basados en plantillas
    ReactiveFormsModule, // Soporte para formularios reactivos
    RouterModule, // Para el enrutamiento interno
  ],
})
export class AuthModule {}
