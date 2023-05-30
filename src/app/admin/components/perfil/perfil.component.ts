import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

interface Profile {
  name: string;
  email: string;
  // Otros campos del perfil
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  perfil: Profile = { name: '', email: '' };


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.perfil().subscribe(
      (res: any) => {
        this.perfil = res;
      },
      (error) => {
        console.log(error);
      }
    );
    
  }
}
