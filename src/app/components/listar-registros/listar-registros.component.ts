import {Component, OnInit} from '@angular/core';
import {PacienteService} from "../../services/paciente.service";
import {PacienteModel} from "../../models/pacienteModel";
import {environment} from "../../../environment";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-registros',
  templateUrl: './listar-registros.component.html',
  styleUrls: ['./listar-registros.component.css']
})
export class ListarRegistrosComponent implements OnInit{


  public pacienteModel: PacienteModel[] = [];
  public apiUrl: string;
  message:string;
  subscription: Subscription;

  constructor(public pacienteService: PacienteService) {
    this.apiUrl = environment.apiUrl;
  }
  async ngOnInit() {
    this.pacienteService.getListadPacientes2().subscribe(res => {
      res.map((el) => { let aux = new PacienteModel(); aux = el; this.pacienteModel.push(aux)  })
    });
    let aux;
    this.pacienteService.getListadPacientes2().subscribe(res => aux = res);
  }

  enviarID(_id: string) {
    environment.id = _id;
  }
}
