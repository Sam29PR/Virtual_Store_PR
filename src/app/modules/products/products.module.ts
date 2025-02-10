 import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { RouterModule } from '@angular/router'; // Para manejar rutas internas del módulo
 
 // Componentes del módulo
 import { ListComponent } from './list/list.component';
 import { DetailComponent } from './detail/detail.component'; 
 
 @NgModule({
   declarations: [
    ListComponent,
    DetailComponent,
  
   ],
   imports: [
     CommonModule, // Proporciona directivas básicas como ngIf y ngFor
     FormsModule, // Soporte para formularios basados en plantillas
     ReactiveFormsModule, // Soporte para formularios reactivos
     RouterModule, // Para el enrutamiento interno
   ],
 })
 export class ProductsModule{}
 