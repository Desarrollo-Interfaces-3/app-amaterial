import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursolista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './cursolista.component.html',
  styleUrl: './cursolista.component.css'
})
export class CursolistaComponent {

  constructor(private route: ActivatedRoute,
    private router: Router
  ){

  }

  irDetalleCurso(){
    this.router.navigate(["10"], {relativeTo: this.route})
  }

  
}
