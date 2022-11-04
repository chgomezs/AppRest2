import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  usuario: any;
  constructor(private activatedRoute: ActivatedRoute,
              private api: ApirestService
              ) { }

  ngOnInit() {
    this.leer();
  }
  async leer()
  {
    let id = "";
    this.activatedRoute.paramMap.subscribe(async parametros => {
      id = parametros.get("id");
    })
    await this.api.getUsuario(id);
    this.usuario = this.api.item;
    console.log(this.usuario);
  }

}
