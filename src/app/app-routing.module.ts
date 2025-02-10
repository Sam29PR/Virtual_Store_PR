import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Importamos los componentes principales
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { ListComponent as ProductListComponent } from './modules/products/list/list.component';
import { DetailComponent as ProductDetailComponent } from './modules/products/detail/detail.component';
import { CartComponent } from './modules/cart/cart/cart.component';
import { ListComponent as OrderListComponent } from './modules/orders/list/list.component';
import { DetailComponent as OrderDetailComponent } from './modules/orders/detail/detail.component';

// Definimos las rutas
const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'orders/:id', component: OrderDetailComponent },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/auth/login' }, // Ruta para páginas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
