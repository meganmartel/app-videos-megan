import { Auteur } from "./auteur";
import { Avis } from "./avis";

export interface Video {
    nom: string;
    description: string;
    code: string;
    categories: string[];
    auteur: Auteur
    datePublication: Date;
    duree: number;
    nombreVues: number;
    avis: Avis[]
}
