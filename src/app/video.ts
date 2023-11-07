import { Utilisateur } from "./utilisateur";
import { Avis } from "./avis";

export interface Video {
    img_url: string;
    nom: string;
    description: string;
    categories: string[];
    auteur: Utilisateur
    datePublication: string;
    duree: number;
    nombreVues: number;
    avis: Avis[]
}
