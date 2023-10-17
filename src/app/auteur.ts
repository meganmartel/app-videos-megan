export interface Auteur {
    nomAuteur: string;
    coordonnees: {
        courriel?:string;
        compteFacebook?: string;
        compteInstagram?: string;
    }
    descriptionAuteur: string;
}
