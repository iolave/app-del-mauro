import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpClient = inject(HttpClient);

  constructor() {}

  async request(
    type: 'POST' | 'GET' | 'PUT' | 'DELETE',
    url: string,
    path: string,
    body: any = {}
  ): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const fullUrl = `${url}/${path}`;

    try {
      switch (type) {
        case 'POST':
          return await lastValueFrom(
            this.httpClient.post(fullUrl, body, { headers })
          );
        case 'GET':
          return await lastValueFrom(
            this.httpClient.get(fullUrl, { headers })
          );
        case 'PUT':
          return await lastValueFrom(
            this.httpClient.put(fullUrl, body, { headers })
          );
        case 'DELETE':
          return await lastValueFrom(
            this.httpClient.delete(fullUrl, { headers })
          );
        default:
          throw new Error(`Método HTTP no soportado: ${type}`);
      }
    } catch (error) {
      console.error(`Error en la solicitud ${type} a ${fullUrl}:`, error);
      throw error;
    }
  }
}
