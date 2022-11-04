import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  listado = [];

  constructor(private api: ApirestService) { }

  ngOnInit() {
    this.listar();
  }
  listar()
  {
    this.api.getUsuarios();
    this.listado = this.api.listado;
  }
}
