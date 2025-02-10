import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importa las rutas principales
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Para trabajar con formularios
import { HttpClientModule } from '@angular/common/http'; // Para peticiones HTTP

// Componentes principales
import { AppComponent } from './app.component';

// Módulos creados
import { AuthModule } from './modules/auth/auth.module';
import { ProductsModule} from './modules/products/products.module' ;
import { CartModule } from './modules/cart/cart.module';
import { OrdersModule } from './modules/orders/orders.module';

@NgModule({
  declarations: [
    AppComponent, // Declaración del componente raíz
  ],

 imports :[ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    ProductsModule,
    CartModule,
    OrdersModule,
 ],

  providers: [],
  bootstrap: [AppComponent], // Componente raíz que arranca la aplicación
})
export class AppModule {}
