import { Component, Input } from '@angular/core';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent {
  @Input() auteur: Utilisateur = {
    nom: "",
    description: "",
    verifie: true,
  }
}
