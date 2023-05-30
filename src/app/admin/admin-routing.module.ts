import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ListaPedidoComponent } from './components/pedido/lista-pedido/lista-pedido.component';
import { NuevoPedidoComponent } from './components/pedido/nuevo-pedido/nuevo-pedido.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ProductoComponent } from './components/producto/producto.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { TramitesComponent } from './components/tramites/tramites.component';

const routes: Routes = [
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'categoria',
    component: CategoriaComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent
  },
  {
    path: 'producto',
    component: ProductoComponent
  },
  {
    path: 'pedido',
    component: ListaPedidoComponent
  },
  {
    path: 'pedido/nuevo',
    component: NuevoPedidoComponent
  }, 
  {
    path: 'tramites',
    component: TramitesComponent // Agrega la ruta y asigna el componente correspondiente
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
