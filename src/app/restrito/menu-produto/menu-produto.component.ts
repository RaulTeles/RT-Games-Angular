import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-menu-produto',
  templateUrl: './menu-produto.component.html',
  styleUrls: ['./menu-produto.component.css']
})
export class MenuProdutoComponent {
  constructor(private router: Router,
    private _loginService: LoginService){}
    logout(){
    localStorage.clear();
    this._loginService.setMostraMenu(true);
    this.router.navigate(['/login']);
    }

}
