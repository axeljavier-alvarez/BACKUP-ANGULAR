import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  /* -------------CREACION DE SERVICIO ------------------*/
  // 1. declarar la ruta
  public url: String = 'http://localhost:3000/api';

  // 4. HTTP headers para definir que cabeceras voy a usar se utiliza comúnmente en aplicaciones Angular para configurar los encabezados de una solicitud HTTP
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

 // 2. Constructor del http cliente
  constructor(public _http: HttpClient) { }

  // 3. Función de backend e importar el observable, poner la ruta y la función tal y como esta en el backend
  ObtenerProductos(): Observable <any> {
    return this._http.get(this.url + '/productos', { headers: this.headersVariable});
  }


}
