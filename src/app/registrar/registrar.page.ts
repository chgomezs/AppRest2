import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage  {
  RUT: string;
  NOM: string;
  CEL: string;
  listado = [];
  constructor(private crud: CrudService,
              private alertController: AlertController,
              private toastController: ToastController) {}

  async agregar(rut: HTMLInputElement, nombre: HTMLInputElement, celular: HTMLInputElement)
  {
    const RUT     = rut.value.trim();
    const NOMBRE  = nombre.value.trim();
    const CELULAR = celular.value.trim();

    if(RUT.length < 1)
    {
        const alert = await this.alertController.create({
          header: 'Alerta',
          subHeader: 'Error en el ingreso de datos',
          message: 'Falta el rut',
          buttons: ['OK'],
        });    
        await alert.present();      
    }
    else if(NOMBRE.length < 1)
    {
        const alert = await this.alertController.create({
          header: 'Alerta',
          subHeader: 'Error en el ingreso de datos',
          message: 'Falta el nombre',
          buttons: ['OK'],
        });    
        await alert.present();      
    }
    else if(CELULAR.length < 1)
    {
        const alert = await this.alertController.create({
          header: 'Alerta',
          subHeader: 'Error en el ingreso de datos',
          message: 'Falta el celular',
          buttons: ['OK'],
        });    
        await alert.present();      
    }
    else
    {
      const datos = [{ "rut"      : rut.value,
                        "nombre"  : nombre.value,
                        "celular" : celular.value
                      }];
      // validar los datos antes de guardar...
      await this.crud.agregar(rut.value, datos);
      rut.value= ""
      nombre.value= ""
      celular.value= ""
      
      const toast = await this.toastController.create({
        message: 'Los datos fueron guardados',
        duration: 2000,
        position: 'middle'
      });
  
      await toast.present();
    }
  }

  async eliminar(rut:HTMLInputElement)
  {
    await this.crud.eliminar(rut.value);
    const toast = await this.toastController.create({
      message: 'El rut: ' + rut.value + ' fue eliminado.',
      duration: 1500,
      position: 'middle',
      icon : 'alert'
    });
    
    await toast.present();
    rut.value = "";
  }
  async leer(rut:HTMLInputElement)
  {
    const resultado = await this.crud.leer(rut.value);

    this.RUT = resultado[0].rut;
    this.NOM = resultado[0].nombre;
    this.CEL = resultado[0].celular;

  }
  async listar() {
    this.listado = await this.crud.listar();
  }
}
