import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PacienteService} from "../../services/paciente.service";

@Component({
  selector: 'app-nuevo-registro',
  templateUrl: './nuevo-registro.component.html',
  styleUrls: ['./nuevo-registro.component.css']
})
export class NuevoRegistroComponent implements OnInit{
  paciente: FormGroup;
  msg: string;

  constructor(private pacienteService: PacienteService) {
  }

  ngOnInit() {
    this.paciente = new FormGroup({
      rut: new FormControl(''),
      nombre: new FormControl(''),
      edad: new FormControl(''),
      sexo: new FormControl(''),
      fechaIngreso: new FormControl(''),
      enfermedad: new FormControl(''),
      revisado: new FormControl(false)
    })
  }

  onSubmit(){
    console.log(this.paciente.value)

    this.pacienteService.setPaciente(this.paciente.value).subscribe(res => {console.log(res); this.msg = res});


  }
}
