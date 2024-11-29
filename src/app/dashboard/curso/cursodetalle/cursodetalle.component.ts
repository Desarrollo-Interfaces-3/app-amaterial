import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cursodetalle',
  standalone: true,
  imports: [],
  templateUrl: './cursodetalle.component.html',
  styleUrl: './cursodetalle.component.css'
})
export class CursodetalleComponent {
  id: string | null = ''

  constructor(private router: ActivatedRoute){

  }
  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get("id")
  }

}
