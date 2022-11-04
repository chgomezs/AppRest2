import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})

export class CamaraPage {
  picture: string;
  constructor() { }

  takePicture() {
  console.log('I will');
    }
}


