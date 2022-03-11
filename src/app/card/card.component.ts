import { Component, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
    titulo: string = '';
    
    @Input()
    price: string = '';
    
    @Input()
    texto1: string = '';
    
    @Input()
    texto2: string = '';
    
    @Input()
    texto3: string = '';

    constructor(private _snackBar: MatSnackBar) {}
  
  openSnackBar(message: string, action: string) {
      this._snackBar.open('Pacote comprado!', 'Fechar');
  }
  openSnackBar2(message: string, action: string) {
    this._snackBar.open('Plano selecionado!', 'Fechar');
}
}
