import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoginResponse } from '../models/loginResponse.interface';
import { Router } from '@angular/router';
import { SignUpResponse } from '../models/signupResponse.interface';
import { SignUpDto } from '../models/signinDto.dto';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserDataResponse } from '../models/userDataResponse.interface';

//RUTA DEL API
const url = 'http://localhost:9000'
//EL COMO SE ENVIA EL CONTENIDO AL API
const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

//HTTPOPTIONS DEL LOGIN
const httpOptionsLogin = {
  headers: new HttpHeaders().append('Authorization',
    'Basic ' + btoa(`g1-proyecto-uno:secret`)),
    'Content-type': 'application/x-www-form-urlencoded'
};

const accessTokenKey = 'access_token';
const refreshTokenKey = 'refresh_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtHelper: JwtHelperService;

  constructor(private http: HttpClient, private router: Router) { }

  private loadAccessToken(retrieveAccessToken: boolean, refreshToken?: string, username?: string, password?: string):
    Observable<LoginResponse> {
    const params = retrieveAccessToken ?
      new HttpParams()
        .set('username', username)
        .set('password', password)
        .set('grant_type', 'password') :
      new HttpParams()
        .set(refreshTokenKey, refreshToken)
        .set('grant_type', refreshTokenKey);
    return this.http.post<any>(
      url + `/oauth/token`, 
      params,
      httpOptionsLogin);
  }

  private loadAccessTokenUsingRefreshToken(): Observable<LoginResponse> {
    const token = this.getToken(refreshTokenKey);
    if (!token || this.jwtHelper.isTokenExpired(token)) {
      console.log('refresh token expired: must logout');
      this.logout();
      return EMPTY;
    }
    return this.loadAccessToken(false, token);
  }

  private getAccessToken(): string {
    const token = this.getToken(accessTokenKey);
    return token && !this.jwtHelper.isTokenExpired(token) ? token : null;
  }

  getToken(key: string): string {
    return localStorage.getItem(key);
  }

  private setToken(key: string, token: string) {
    localStorage.setItem(key, token);
  }

  private clearTokenAndUserInfo() {
    localStorage.removeItem(accessTokenKey);
    localStorage.removeItem(refreshTokenKey);
    localStorage.removeItem('UserUsername');
    localStorage.removeItem('UserEmail');
    localStorage.removeItem('UserColegio');
    localStorage.removeItem('UserIdColegio');
    localStorage.removeItem('UserRole');
  }

  login(username: string, password: string) {
    return this.loadAccessToken(true, null, username, password).subscribe(resp =>{
      this.setToken(accessTokenKey, resp.access_token);
      this.setToken(refreshTokenKey,resp.refresh_token);
      if(resp.access_token != null){
        this.getMyUser(username).subscribe(resp => {
          this.setToken('UserUsername', resp.username);
          this.setToken('UserEmail', resp.email);
          this.setToken('UserColegio', resp.nombreColegio);
          this.setToken('UserIdColegio', resp.idColegio.toString());
          this.setToken('UserRole', resp.role[0]);
          if(resp.username != null){
            this.router.navigate(['cursosacademicos']);
          }
        });
      }
    });
  }

  getMyUser(username: string): Observable<UserDataResponse>{
    return this.http.get<UserDataResponse>(
      url + `/usuario/userData/${username}`,
      //Metodo que nos da las httpOptions
      this.getHttpOptionsWithToken()
    )
  }

  logout(): Promise<boolean> {
    this.clearTokenAndUserInfo();
    return this.router.navigate(['/login']);
  }

  getHttpOptionsWithToken(){
    //HTTPOPTIONS CON EL TOKEN NECESARIO PARA CUALQUIER PETICION QUE REQUIERA AUTENTICACION
    //PODRIA PONERSE PERO MEJOR EL APLICATION/JSON
    //'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'
    const httpOptionsWithToken = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
        ,'Authorization': 'Bearer '+ localStorage.getItem('access_token')
    })};
    return httpOptionsWithToken;
  }

  signUp(dto: SignUpDto): Observable<SignUpResponse>{
    return this.http.post<SignUpResponse>(
      url + `/registrarse`, 
      dto,
       this.getHttpOptionsWithToken()
       );
  }

  

}