import {Component, OnInit} from '@angular/core';
import {PacienteService} from "../../services/paciente.service";
import {PacienteModel} from "../../models/pacienteModel";
import {environment} from "../../../environment";
import { AngularFileUploaderModule } from "angular-file-uploader";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detalle-registro',
  templateUrl: './detalle-registro.component.html',
  styleUrls: ['./detalle-registro.component.css']


})
export class DetalleRegistroComponent implements OnInit {
  public id: string;
  public paciente_ : PacienteModel;
  public apiUrl : string;

  afuConfig = {
    uploadAPI: {
      url:environment.apiUrl + 'fileUpload/' + environment.id,
    }
  };

  constructor(public pacienteService: PacienteService, public router:Router) {
    this.apiUrl = environment.apiUrl;
  }

  ngOnInit() {
    const id = window.location.href.split('/')[5];
    console.log(id)

    this.pacienteService.getPacienteById(id).subscribe(res => {
      this.paciente_ = res;
      console.log(res);
    });


  }
}
