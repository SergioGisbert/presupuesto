import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarGastoComponent } from './components/gastos/ingresar-gasto/ingresar-gasto.component';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';

const routes: Routes = [
  { path: 'ingresarPresupuesto' , component: IngresarPresupuestoComponent},
  { path: 'gastos' , component: GastosComponent},
  { path: '' , redirectTo: '/ingresarPresupuesto', pathMatch: 'full'},
  { path: '**' , redirectTo: '/ingresarPresupuesto', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
