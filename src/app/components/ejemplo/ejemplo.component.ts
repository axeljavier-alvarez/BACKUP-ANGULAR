import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})
export class EjemploComponent implements OnInit {

  title = 'Ejemplo';
  personas = [
    { nombre: 'Axel', edad: 24},
    { nombre: 'Axel', edad: 30},
    { nombre: 'Axel', edad: 17},
    { nombre: 'Axel', edad: 15}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
