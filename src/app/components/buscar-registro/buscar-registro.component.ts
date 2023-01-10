import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PacienteService} from "../../services/paciente.service";
import {PacienteModel} from "../../models/pacienteModel";

@Component({
  selector: 'app-buscar-registro',
  templateUrl: './buscar-registro.component.html',
  styleUrls: ['./buscar-registro.component.css']
})
export class BuscarRegistroComponent implements OnInit{
  busquedaPaciente: FormGroup;
  public pacienteModel: PacienteModel[] = [];

  constructor(public pacienteService: PacienteService) {
  }

  ngOnInit() {
    this.busquedaPaciente = new FormGroup({
      sexo: new FormControl(''),
      fechaIngreso: new FormControl(''),
      enfermedad: new FormControl('')
    })
  }

  onSubmit() {
    console.log(this.busquedaPaciente.value.sexo)
    console.log(this.busquedaPaciente.value.fechaIngreso)
    console.log(this.busquedaPaciente.value.enfermedad)

    this.pacienteService.busquedaPacientes(this.busquedaPaciente.value.sexo, this.busquedaPaciente.value.fechaIngreso, this.busquedaPaciente.value.enfermedad)
      .subscribe(res => {res.map((el) => { let aux = new PacienteModel(); aux = el; this.pacienteModel.push(aux)  })});

    console.log(this.pacienteModel)
  }


  eliminarPaciente(_id: string) {

  }
}
