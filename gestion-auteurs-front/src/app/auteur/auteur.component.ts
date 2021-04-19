import { Component, OnInit } from '@angular/core';
import { AuteurService } from '../services/auteur.services';
@Component({
  selector: 'app-auteur',
  templateUrl: './auteur.component.html',
  styleUrls: ['./auteur.component.css']
})
export class AuteurComponent implements OnInit {
  tableauAuteurs: any [];
  constructor(private auteurService :AuteurService) { // let auteurService : AuteurService // auteurService = new AuteurService()
    this.tableauAuteurs =[];
   }
  ngOnInit(): void {
    this.tableauAuteurs = this.auteurService.getAllAuteur();
  }

}
