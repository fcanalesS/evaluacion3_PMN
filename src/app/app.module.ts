import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { HomeComponent } from './components/home/home.component';
import { RoutingModule} from "./services/routing/routing.module";
import { NuevoRegistroComponent } from './components/nuevo-registro/nuevo-registro.component';
import { ListarRegistroComponent } from './components/listar-registro/listar-registro.component';
import { ListarRegistrosComponent } from './components/listar-registros/listar-registros.component';
import { BusquedaRegistroComponent } from './components/busqueda-registro/busqueda-registro.component';
import { PacienteService } from "./services/paciente.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ActualizarRegistroComponent } from './components/actualizar-registro/actualizar-registro.component';
import { DetalleRegistroComponent } from './components/detalle-registro/detalle-registro.component';
import { BuscarRegistroComponent } from './components/buscar-registro/buscar-registro.component';
import { ErrorComponent } from './components/error/error.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AngularFileUploaderModule} from "angular-file-uploader";

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    HomeComponent,
    NuevoRegistroComponent,
    ListarRegistroComponent,
    ListarRegistrosComponent,
    BusquedaRegistroComponent,
    ActualizarRegistroComponent,
    DetalleRegistroComponent,
    BuscarRegistroComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFileUploaderModule
  ],
  providers: [PacienteService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
