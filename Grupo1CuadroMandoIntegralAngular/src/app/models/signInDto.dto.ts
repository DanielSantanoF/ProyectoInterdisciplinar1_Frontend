export class SignUpDto {
    username: string;
    password: string;
    password2: string;
    email: string;
    idColegio: number;
    rol: string;

    constructor(u: string, p: string, p2: string, e: string, id: number, r: string){
        this.username = u;
        this.password = p;
        this.password2 = p2;
        this.email = e;
        this.idColegio = id;
        this.rol = r;
    }
}