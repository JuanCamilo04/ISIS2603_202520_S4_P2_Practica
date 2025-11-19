import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmprendedorService } from '../emprendedor.service';
import { EmprendedorDetail } from '../emprendedor-detail';

@Component({
  selector: 'app-emprendedor-detail',
  standalone: false,
  templateUrl: './emprendedor-detail.component.html',
  styleUrl: './emprendedor-detail.component.css'
})
export class EmprendedorDetailComponent implements OnInit {

  emprendedorDetail!: EmprendedorDetail;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private emprendedorService: EmprendedorService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.emprendedorService.getEmprendedorDetail(id).subscribe({
      next: data => this.emprendedorDetail = data
    });
  }

  volver(): void {
    this.router.navigate(['/emprendedores']);
  }
}