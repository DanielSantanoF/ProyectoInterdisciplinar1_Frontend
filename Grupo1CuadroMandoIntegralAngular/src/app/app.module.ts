import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

//FLEX LAYOUT
//npm i -s @angular/flex-layout @angular/cdk
import {FlexLayoutModule} from '@angular/flex-layout';
//MODULO DE CONTROL DEL JWT
//npm install @auth0/angular-jwt
import { JwtModule } from '@auth0/angular-jwt';
//PARA SUBIR ARCHIVOS
//npm i angular-material-fileupload
import { MatFileUploadModule } from 'angular-material-fileupload';
//ANGULAR MATERIAL
//npm install -g @angular/cli
//ng add @angular/material
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

//SERVICIOS
import { AuthService } from './services/auth.service';
import { IndicadoresService } from './services/indicadores.service';
import {PuntosControlService } from './services/puntos-control-service.service';
import { PsmService } from './services/psm.service';
import { UsuariosService } from './services/usuarios.service';

//COMPONENTES
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { ListaPuntosControlComponent } from './lista-puntos-control/lista-puntos-control.component';
import { ListaCursosacademicosComponent } from './lista-cursosacademicos/lista-cursosacademicos.component';
import { ListaIndicadoresComponent } from './lista-indicadores/lista-indicadores.component';
import { AccesoDenegadoComponent } from './acceso-denegado/acceso-denegado.component';
import { ModalAnyadirCursoacademicoComponent } from './modal-anyadir-cursoacademico/modal-anyadir-cursoacademico.component';
import { CursoAcademicoService } from './services/curso-academico.service';
import { ModalAnyadirPuntocontrolComponent } from './modal-anyadir-puntocontrol/modal-anyadir-puntocontrol.component';
import { ListadoPuntosVaciosComponent } from './listado-puntos-vacios/listado-puntos-vacios.component';
import { ListaPsmComponent } from './lista-psm/lista-psm.component';
import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';
import { PsmByCursoAcademicoAndEvComponent } from './psm-by-curso-academico-and-ev/psm-by-curso-academico-and-ev.component';
import { VerPsmBuscadoDialogComponent } from './ver-psm-buscado-dialog/ver-psm-buscado-dialog.component';
import { NuevoPsmByCsvComponent } from './nuevo-psm-by-csv/nuevo-psm-by-csv.component';
import { ListaEtapasComponent } from './lista-etapas/lista-etapas.component';
import { EtapaService } from './services/etapa.service';
import { CursoService } from './services/curso.service';
import { ModelNuevoCursoComponent } from './model-nuevo-curso/model-nuevo-curso.component';
import { ListaUnidadComponent } from './lista-unidad/lista-unidad.component';
import { UnidadService } from './services/unidad.service';
import { ListaProcesosComponent } from './lista-procesos/lista-procesos.component';
import { ModalAnyadirProcesoComponent } from './modal-anyadir-proceso/modal-anyadir-proceso.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { PsmDePuntoControlComponent } from './psm-de-punto-control/psm-de-punto-control.component';

//RUTAS DE LA APP
const appRoutes: Routes = [ 
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SigninComponent },
  { path: 'accessDenied', component: AccesoDenegadoComponent },
  { path: 'puntosControl/:id', component: ListaPuntosControlComponent },
  { path: 'cursosacademicos', component: ListaCursosacademicosComponent },
  { path: 'proceso/:id', component: ListaIndicadoresComponent },
  { path: 'etapa/:id', component:  ListaEtapasComponent},
  { path: 'curso/:id', component:  ListaCursosComponent},
  { path: 'unidad/:id', component:  ListaUnidadComponent},
  { path: 'puntosControl/puntos/vacios', component:  ListadoPuntosVaciosComponent },
  { path: 'listaPsm', component: ListaPsmComponent },
  { path: 'psmByCaIdAndEv', component: PsmByCursoAcademicoAndEvComponent },
  { path: 'cursos/:id', component: ListaCursosComponent },
  {path: 'psm/obtenerPsm',component: VerPsmBuscadoDialogComponent},
  { path: 'procesos/:id', component: ListaProcesosComponent },
  { path: 'nuevoPsm', component: NuevoPsmByCsvComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PaginaNoEncontradaComponent }
]

@NgModule({
  declarations: [//AQUI SE INDICAN LOS COMPONENTES DE LA APP
    AppComponent,
    PaginaNoEncontradaComponent,
    ListaUsuariosComponent,
    LoginComponent,
    SigninComponent,
    ListaPuntosControlComponent,
    ListaCursosacademicosComponent,
    ListaIndicadoresComponent,
    AccesoDenegadoComponent,
    ModalAnyadirCursoacademicoComponent,
    ModalAnyadirPuntocontrolComponent,
    ListadoPuntosVaciosComponent,
    ListaPsmComponent,
    MenuNavegacionComponent,
    PsmByCursoAcademicoAndEvComponent,
    VerPsmBuscadoDialogComponent,
    NuevoPsmByCsvComponent,
    ListaEtapasComponent,
    ModelNuevoCursoComponent,
    ListaUnidadComponent,
    ListaProcesosComponent,
    ModalAnyadirProcesoComponent,
    ListaCursosComponent,
    PsmDePuntoControlComponent
  ],
  imports: [//AQUI SE INDICAN LOS MODULOS QUE VAMOS A USAR EN LA APP
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    JwtModule,
    MatFileUploadModule,

  ],
  entryComponents: [//AQUI SE INDICAN LOS COMPONENTES DE LOS DIALOGOS
    ModalAnyadirCursoacademicoComponent,
    ModalAnyadirPuntocontrolComponent,
    ModelNuevoCursoComponent,
    VerPsmBuscadoDialogComponent,
    ModalAnyadirProcesoComponent,
    PsmDePuntoControlComponent
  ],
  providers: [//AQUI SE INDICAN LOS SERVICIOS, Y LAS OPT DEL DIALOG PARA VER EL FONDO OSCURO
    AuthService,
    PuntosControlService,
    IndicadoresService,
    PsmService,
    CursoAcademicoService,
    PsmService,
    UsuariosService,
    EtapaService,
    CursoService,
    UnidadService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
