import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.page.html',
  styleUrls: ['./administrar.page.scss'],
})
export class AdministrarPage implements OnInit {

  
  constructor(private usuarioService: UsuarioService,private router: Router, 
    private alertController: AlertController) { 
      
    }
   

  async ngOnInit() {
    this.Usuarios = await this.usuarioService.getUsuarios();
  }

  Usuario = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl(),
    rut: new FormControl(),
    correo: new FormControl(),
    fecha_naci: new FormControl(),
    password: new FormControl(),
    confi_password: new FormControl(),
    genero: new FormControl(),
    tipo_user: new FormControl('Alumno'),
    veiculo: new FormControl(),
    marca: new FormControl(),
    modelo: new FormControl(),
    patente: new FormControl(),
  })
  Usuarios: any[] = [];

  
  buscar(usuario: any) {
    this.Usuario.patchValue(usuario);
  }

  async eliminar(rut: string) {
    if (await this.usuarioService.EliminarUsuario(rut)) {
      this.Usuarios = await this.usuarioService.getUsuarios();
    }
  }

  async registrar() {
    
    if(this.Usuario.controls.password.value != this.Usuario.controls.confi_password.value){
      alert("las contraseñas no coinciden")
      return;
    }
    
    
    if(this.Usuario.controls.password.value != this.Usuario.controls.confi_password.value){
      await this.presentAlert('Problema', 'las contraseñas no coinsiden');
    }else if ( await this.usuarioService.crearUsuario(this.Usuario.value)){
      await this.presentAlert('Perfecto', 'Registrado correctamente');
      this.Usuario.reset();
      await this.usuarioService.getUsuarios();
      this.router.navigate(['']);  
    } else {
      await this.presentAlert('Error', 'El usuario no se pudo registrar');
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Entendido'],
    });
    await alert.present();
  }
}
