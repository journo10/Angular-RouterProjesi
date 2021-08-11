import { UserComponent } from './users/user/user.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './products/product/product.component';
import { AdminComponent } from './admin/admin/admin.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  
  {path:'products',component:ProductsComponent,children:[
    {path:':id',component:ProductComponent},
    {path:':id/edit',component:EditProductComponent},
  ]},
  
  {path:'users',component:UsersComponent,children:[
    {path:':user',component:UserComponent}
  ]},
  // {path:'admin',component:AdminComponent},

  {path:'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule )},

  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
