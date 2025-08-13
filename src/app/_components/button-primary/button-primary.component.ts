import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  imports: [],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.css'
})
export class ButtonPrimaryComponent {
  @Input() textoBotao: string = '';
  @Input() exibeIconMais:boolean = true;
}
