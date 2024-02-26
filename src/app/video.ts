import { Utilisateur } from "./utilisateur";
import { Avis } from "./avis";

export interface Video {
    id?: number;
    img_url: string;
    nom: string;
    description: string;
    categories: string[];
    auteur: Utilisateur
    datePublication: string;
    duree: number;
    nombreVues: number;
    score: number;
    sousTitres: string;
    avis: Avis[]
}
