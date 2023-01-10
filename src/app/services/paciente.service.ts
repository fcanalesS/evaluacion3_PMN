import {Injectable} from '@angular/core';
import axios from 'axios';
import {PacienteModel} from "../models/pacienteModel";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {environment} from "../../environment";

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  public url = environment.apiUrl;
  public headers = new HttpHeaders().set("Content-Type", "application/json");

  private message = new BehaviorSubject('');
  currentMesage = this.message.asObservable();

  constructor(private http: HttpClient) {
  }

  getHola(): any {
    return "hola desde servicio";
  }

  getListadPacientes2(): Observable<any> {
    return this.http.get(this.url + "pacientes", {headers: this.headers});
  }

  setPaciente(paciente): Observable<any> {
    return this.http.post(this.url + "paciente", paciente, {headers: this.headers});

  }

  getPacienteById(id): Observable<any> {
    return this.http.get(this.url + "pacienteById/" + id, {headers: this.headers});
  }

  updatePacienetById(id, paciente): Observable<any> {
    return this.http.put(this.url + 'paciente/' + id, paciente, {headers: this.headers});
  }

  eliminarPacienteById(id): Observable<any> {
    return this.http.delete(this.url + 'borrarPaciente/' + id, {headers: this.headers});
  }

  busquedaPacientes(sexo, fechaIngreso, enfermedad): Observable<any>{
    return this.http.get(this.url + 'busquedaPersonlizada/' + sexo + '/' + fechaIngreso + '/' + enfermedad, {headers: this.headers});
  }

  changeMessage(message: string) {
    this.message.next(message);
  }

}
