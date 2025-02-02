import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Medicamento } from '../model/Medicamento';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  baseURL = "https://api-saudedobem.herokuapp.com"

  getAllMedicamentos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(`${this.baseURL}/medicamentos`, this.token)
  }
}
