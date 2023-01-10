import {Component, OnInit} from '@angular/core';
import {PacienteService} from "../../services/paciente.service";
import {map} from "rxjs";
import {PacienteModel} from "../../models/pacienteModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  constructor(public pacienteService: PacienteService, private router:Router) {

  }

  public pacienteModel: PacienteModel[] = [];

  async ngOnInit() {
    this.pacienteService.getListadPacientes2().subscribe(res => {
      res.map((el) => { let aux = new PacienteModel(); aux = el; this.pacienteModel.push(aux)  })
    });

    let aux;
    this.pacienteService.getListadPacientes2().subscribe(res => aux = res);

  }

  eliminarPaciente(_id: string) {
    this.pacienteService.eliminarPacienteById(_id).subscribe(res => { console.log(res) } )
    this.router.navigateByUrl("/")
  }
}
