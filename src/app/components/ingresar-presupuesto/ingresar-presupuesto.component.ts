import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent {
  cantidad: number;
  cantidadCorrecta:boolean;

  constructor(private _presupuestoServices: PresupuestoService, private router: Router){
    this.cantidad = 0;
    this.cantidadCorrecta= false;
  }
  agregar(){
    if(this.cantidad > 0){
      this.cantidadCorrecta = false;
      this._presupuestoServices.presupuesto=this.cantidad;
      this._presupuestoServices.restante=this.cantidad;
      this.router.navigate(['/gastos'])
    }else{
      this.cantidadCorrecta = true;
    }
  }
}
