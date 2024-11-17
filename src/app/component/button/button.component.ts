import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  //variáveis e funções

  nome: string = 'Marina';
  idade: number = 23;

  // função
  mensagem() {
    alert('Gostosa demais');
  }
}
