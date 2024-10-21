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
    private alertController: AlertController) { }

  ngOnInit() {
  }

  persona = new FormGroup({
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

}
