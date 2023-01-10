import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PacienteService} from "../../services/paciente.service";
import {PacienteModel} from "../../models/pacienteModel";
import {Router} from "@angular/router";


@Component({
  selector: 'app-actualizar-registro',
  templateUrl: './actualizar-registro.component.html',
  styleUrls: ['./actualizar-registro.component.css']
})
export class ActualizarRegistroComponent implements OnInit{
  paciente: FormGroup;
  msg: string;
  pacienteModel : PacienteModel;
  public id: string;

  constructor(private pacienteService: PacienteService, private router: Router) {
    console.log(window.location.href)
    this.id = window.location.href.split('/')[5];
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
    });
    this.pacienteService.getPacienteById(this.id)
      .subscribe(res => {
        console.log(res)
        this.paciente = new FormGroup({
          rut: new FormControl(res.rut),
          nombre: new FormControl(res.nombre),
          edad: new FormControl(res.edad),
          sexo: new FormControl(res.sexo),
          fechaIngreso: new FormControl(res.fechaIngreso),
          enfermedad: new FormControl(res.enfermedad),
          revisado: new FormControl(res.revisado)
        });
      });


  }

  onSubmit(){
    console.log(this.paciente.value)

    this.pacienteService.updatePacienetById(this.id, this.paciente.value).subscribe(res => {console.log(res.error.text)});

    this.router.navigateByUrl('/');
  }
}
