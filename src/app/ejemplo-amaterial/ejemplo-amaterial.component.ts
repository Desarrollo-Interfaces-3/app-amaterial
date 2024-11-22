import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';


@Component({
  selector: 'app-ejemplo-amaterial',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './ejemplo-amaterial.component.html',
  styleUrl: './ejemplo-amaterial.component.css'
})
export class EjemploAmaterialComponent {

}
