import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private storage: Storage) { 
    this.init();
  }

  async init(){
    await this.storage.create();
    
    let admin = {
      rut: '12345678-k',
      nombre: 'admin',
      correo: 'admin@duocuc.cl',
      password: 'admin1234.',
      confirmpassword: 'admin1234.',
      fecha: '2003-01-01',
      genero: 'Otro',
      tipo_user: 'Administrador',
      tiene_Auto: 'No',
      marca: '',
      patente: '',
      modelo: '',
      canti_acientos: '',
    }
    await this.crearUsuario(admin);
  }
  
  private usuarioValido: string ="";
  private AlumnoCorreo = /^[a-zA-Z0-9._%+-]+@duocuc\.cl$/;
  private ProfeCorreo = /^[a-zA-Z0-9._%+-]+@profesor\.duocuc\.cl$/;
  
  public async crearUsuario(usuario: any): Promise<boolean>{

    let usuarios: any[] = await this.storage.get("Usuarios") || [];
    
    if(usuarios.find(user => user.rut === usuario.rut) != undefined){
      
      return false;
      
    }

    if (!this.ProfeCorreo.test(usuario.correo) && !this.AlumnoCorreo.test(usuario.correo)){
      return false;
    } 
  
    if(this.ProfeCorreo.test(usuario.correo)){
      usuario.tipo_user = "Profesor"
    }
    
    console.log(usuario.correo);
    console.log(usuario.tipo_user);
    
    return true;
    
  }

  public async getUsuario(rut: string){
    let usuarios: any[] = await this.storage.get("Usuarios") || [];
    return usuarios.find(user =>user.rut === rut)
  }
  
  public async getUsuarios(){
    let usuarios: any[] = await this.storage.get("Usuarios") || [];

  }

}
